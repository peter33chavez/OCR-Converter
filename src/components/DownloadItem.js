import React, { useContext } from 'react'
import { AiOutlineCloseCircle, AiOutlineDownload } from 'react-icons/ai'
import downloadTxtFile from '../utils/downloadTxtFile'
import removeItemFromList from '../utils/removeItemFromList'
import { SavedFilesContext } from './OCRConverter'

const DownloadItem = ({file}) => {

    const context = useContext(SavedFilesContext);
    const {setSavedFiles, savedFiles} = context;
  return (
    <div className="file-card">
        <button onClick={() => removeItemFromList(file.id, savedFiles, setSavedFiles)}>
            <AiOutlineCloseCircle size={24} />
        </button>
        <span>{file.fileName}</span>
        
        <button className="download-link" onClick={()=> downloadTxtFile(file.text, file.fileName)}
        >
            <AiOutlineDownload size={24} /> 
        </button>
        {/* delete button to delete file from list */}
    </div>
  )
}

export default DownloadItem