const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// database connection
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected!"))
  .catch((err) => console.log(err));

require("./models/SentEmail");
const EmailSent = mongoose.model("sentemails");

// CSV an EMail Processing

const csv = require("csv-parser");
const fs = require("fs");
var nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { parseJSON } = require("jquery");
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
    const tempResults = [];
    var tempList = [];
    const path = `${__dirname}/client/public/uploads/${file.name}`;
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data) => tempResults.push(data))
      .on("end", () => {
        for (var i = 0; i < tempResults.length; i++) {
          tempList.push(tempResults[i].Email);
        }

        res.json({
          fileName: file.name,
          filePath: `/uploads/${file.name}`,
          fileContent: tempList,
          entireFile: file,
        });
      });

    // end create temp list of emails to render
  });
});
// send Email Function
function sendEmail(list) {
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
    from Node.js application using emails from uploaded CSV file`,
    // html: '<h1>Hello</h1>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      // res.send("Email(s) are sent to: " + list+". File containing data has been removed from the server");
      //  res.send('Email(s) are sent to: ' +list +'Tech Details: '+ info.response);
    }
  });
}
// Compares two arrays, returns new array with unique items
function compare(arr1, arr2) {
  var tempArray = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      tempArray.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      tempArray.push(arr2[j]);
    }
  }
  return tempArray;
}
// End send Email Function

// Send email Route
app.post("/sendemails", (req, res) => {
  // Initialize empty arrays

  const results = [];
  var list = [];
  
  // Read data from CSV file and get emails only

  const path = `${__dirname}/client/public/uploads/data.csv`;

  fs.access(path, fs.F_OK, (err) => {
    // file does not exist
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
          // add all emails from csv file to array
          for (var i = 0; i < results.length; i++) {
            list.push(results[i].Email);
          }
          // now check if emails exist in db
          EmailSent.find({          
            email: list.map((item) => item),
          }).exec((err, listOfRecordsInDB) => {
            if (err) {
              console.log(err);
            }
            console.log(
              "list of records in database :" +
                listOfRecordsInDB.map((item) => item.email)
            );
            var newArray = [];
            // looking for emails that don't exist in Db
            newArray =  compare(list,listOfRecordsInDB.map((item) => item.email));
            console.log("this is a TempArray of differences "+ newArray );            
            // sends email to emails that do not exist in db and save them to db
            for (var i=0; i<newArray.length; i++){            
            sendEmail(newArray[i]);
            let emailsent = new EmailSent({
              email: newArray[i],
              sentEmailFlag: true,
            });
            emailsent.save((err, success) => {
              if (err) {
                console.log(err);
              }
              console.log("this is success message from save to db"+success);
              // return res.json(success);
            });
            }

            // End save emails that are not and db and received email
          });
          // end find emails

          // end of now check if emails exist in db

          res.send(
            `Email(s) are successfully sent to:

           ${list}

           File containing data has been removed from the server
           `
          );
          return list;
        });
      // Delete File from server - MAKE IT A FUNCTION
      setTimeout(() => {
        try {
          fs.unlinkSync(path);
          //file removed
        } catch (err) {
          console.error(err);
        }
        // End Delete File from server
      }, 3000);

      // Confirmation of file Deletion - MAKE IT A FUNCTION
      setTimeout(() => {
        fs.access(path, fs.F_OK, (err) => {
          if (err) {
            // console.error(err);
            console.log("File is successfully removed from the server");
            return;
          }
          //file exists
          console.log("File was not removed from the system");
        });
        // End Confirmation of file Deletion
      }, 3001);      
    } //end of else file exist
  });
 }); // End Send email Route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started... on port ${PORT}`));
