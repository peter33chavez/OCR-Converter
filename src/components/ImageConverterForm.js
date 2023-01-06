import React from 'react'
import convertToText from '../utils/convertToText';
import InputField from './InputField';

const ImageConverterForm = ({imageData, setImageToText, setImageData, fileName, setFileName}) => {

  const handleSubmit =  (e) => {
    e.preventDefault()
    convertToText(imageData, setImageToText);
  }

  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <InputField 
        className="image-uploader" 
        inputId="new-file-name"
        setState={setImageData}
        inputType="file"
        accept='image/*' 
        multiple={false} 
        
      />

      {!!imageData && 
        <div className='preview-image-container'>
          <span>Image Preview:</span>
          <img src={URL.createObjectURL(imageData)} alt="preview image"/>
        </div>
      }

      <InputField 
        className="file-name-container" inputId="new-file-name" 
        labelName="New File Name:"
        stateValue={fileName}
        setState={setFileName}
        inputType="text"
        placeholder="e.g: TextFile"
        required
      />

      <button className='button' type="submit">Convert</button>
    </form>
  )
}

export default ImageConverterForm