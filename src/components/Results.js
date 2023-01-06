import React, { useContext } from 'react'
import { SavedFilesContext } from './OCRConverter';

const Results = ({convertedText, fileName}) => {

    const context = useContext(SavedFilesContext);
    const {setSavedFiles} = context;


    const saveFile = () => {
        setSavedFiles((curr) => [...curr, {
            id: Math.random() * convertedText.length,
            text: convertedText,
            fileName: `${fileName}.txt`,
        }])
    }
  return (
    <div>
        <textarea id="converted-text" cols="45" rows="10" defaultValue={convertedText} />
        <div>
            <p>Correct any typos before saving</p>
            <button className='button' onClick={saveFile}>Save</button>
        </div>
    </div>
  )
}

export default Results