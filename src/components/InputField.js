import React from 'react'

const InputField = (props) => {
    const {className, labelName, inputId, stateValue, setState, inputType, placeholder, acceptOptions, multiple, required } = props;

    const handleInputChange = (e) => {
      setState( inputType === "file" ? e.target.files[0] : e.target.value)
    }
  return (
    <div className={className}>
        {labelName && <label htmlFor={inputId}>{labelName}</label>}
        <input 
          onChange={handleInputChange} 
          value={stateValue} 
          id={inputId} 
          type={inputType} 
          placeholder={placeholder}
          name={inputId}
          multiple={multiple}
          accept={acceptOptions}
          required={required}
        />
          

    </div>
  )
}

export default InputField