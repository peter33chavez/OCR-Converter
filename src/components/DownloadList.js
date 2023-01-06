import React, { useContext } from 'react'
import DownloadItem from './DownloadItem';
import { SavedFilesContext } from './OCRConverter';

const DownloadList = () => {

    const context = useContext(SavedFilesContext);
    const {savedFiles} = context;
  return (
    <ul className='download-list'>
        {savedFiles.length === 0 ? (
            <div className="file-card" style={{justifyContent: "center"}}>
                <p>No Downloadable files yet.</p>
            </div>
        ) : 
            savedFiles.map(file => (
                <DownloadItem key={file.id} file={file}/>
            ))
        }
    </ul>
  )
}

export default DownloadList