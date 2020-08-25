import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link, 
  Redirect
} from "react-router-dom";
import Message from './Message';
import Progress from './Progress';




import axios from 'axios';
// import fileUpload from 'express-fileupload';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [link, setLink]= useState(false);
  const [notify, setNotify] = useState('No File Uploaded');

  const onChange = e => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath, fileContent } = res.data;
// console.log(fileContent[0]);
      setUploadedFile({ fileName, filePath, fileContent });
      setMessage('File Uploaded');
      setLink(true);
      setNotify(fileName);
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
   
  };

// console.log(uploadedFile);
function ActionButton(){
  async function handleClick(e){
    
    e.preventDefault();
    // console.log('the link was clicked');
    const res = await axios.post('/sendemails');
    // console.log(link);
    // console.log(res);
    setNotify(res.data);
    setUploadedFile({ fileContent: '' });

  }
  return (
    <div>
      <button className="btn btn-danger"  onClick={handleClick}>Send Emails</button>
      <p>Email Status : 
      {notify}</p>
    </div>
    
    
  );
}


  return (
    
    <Fragment>
    <div className="m-2">

            {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />

            <ul>{uploadedFile.fileContent ? uploadedFile.fileContent.map(item=><li key={item}>{item}</li>): ''}</ul>
          </div>
        </div>
      ) : null}

<ActionButton/>
<Router>
  {link && (<Redirect to={'/sendemails'}/>) }
</Router>
    </div>
    </Fragment>
  );
};

export default FileUpload;
