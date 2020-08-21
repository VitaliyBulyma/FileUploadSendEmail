const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// CSV an EMail Processing

const csv = require("csv-parser");
const fs = require("fs");
var nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const { USER_EMAIL, EMAIL_PASSWORD } = process.env;

// End CSV an EMail Processing

app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  // console.log("this is from upload");
  

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    // create temp list of emails to render
    const tempResults= [];
    var tempList= [];
    const path = `${__dirname}/client/public/uploads/${file.name}`;
    fs.createReadStream(path)
  .pipe(csv())
  .on('data', (data) => tempResults.push(data))
  .on('end', () => {
    for (var i=0; i<tempResults.length; i++){
        tempList.push(tempResults[i].Email);
    }
    

     res.json({ fileName: file.name, filePath: `/uploads/${file.name}`, fileContent: tempList, entireFile: file });

  });
  
  // end create temp list of emails to render
   
  });

});

// Send email Route
app.post("/sendemails", (req, res) => {
  // Start
  // Initialize empty arrays
  const results = [];
  var list = [];
  // Read data from CSV file and get emails only

  const path = `${__dirname}/client/public/uploads/data.csv`;

  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      res.send("CSV file containing emails list does not exist");
      return;
    } else {
      //file exists
      fs.createReadStream(path)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          for (var i = 0; i < results.length; i++) {
            list.push(results[i].Email);
          }
          // console.log(list);
        });

      // send Email

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: USER_EMAIL,
          pass: EMAIL_PASSWORD,
        },
      });

      var mailOptions = {
        from: USER_EMAIL,
        to: list,
        subject: "Just Testing",
        text: `I am sending you this email 
          from Node.js application includes upload files`,
        // html: '<h1>Hello</h1>'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send("Email(s) are sent to: " + list+". File containing data has been removed from the server");
          //  res.send('Email(s) are sent to: ' +list +'Tech Details: '+ info.response);
        }
      });



      // Delete File from server - MAKE IT A FUNCTION
     try {
        fs.unlinkSync(path);
        //file removed
      } catch (err) {
        console.error(err);
      }
      // End Delete File from server



      // Confirmation of file Deletion - MAKE IT A FUNCTION
      fs.access(path, fs.F_OK, (err) => {
        if (err) {
          // console.error(err);
          console.log('File is successfully removed from the server');
          return;
        }
      
        //file exists
        console.log('File was not removed from the system');
      });
      // End Confirmation of file Deletion  

      // End
    }
  });
});
// End Send email Route
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started..."));
