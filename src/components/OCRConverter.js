import React, { createContext, useState } from 'react'
import { ProgressBar } from 'react-loader-spinner';
import DownloadList from './DownloadList';
import ImageConverterForm from './ImageConverterForm'
import Results from './Results';

export const SavedFilesContext = createContext();

const OCRConverter = () => {
    const [imageData, setImageData] = useState(null);
  const [savedFiles, setSavedFiles] = useState([]);
  const [fileName, setFileName] = useState('');
  const [imageToText, setImageToText] = useState({loading: false, convertedText: null});

  return (
    <SavedFilesContext.Provider value={{savedFiles, setSavedFiles}}>
        <div className='ocr-container'>
            <div className="converter-data">
                <ImageConverterForm 
                imageData={imageData} 
                setImageData={setImageData}
                setImageToText={setImageToText} 
                fileName={fileName}
                setFileName={setFileName}
                />
                {imageToText.loading ? (
                <>
                    <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor = '#555555'
                    barColor = '#9f9f9f'
                    />
                    <p>converting...</p>
                </>
                ) : null
                }
                {imageToText.convertedText ? (
                <Results 
                    convertedText={imageToText.convertedText}
                    fileName={fileName} 
                />
                ) : null
                }
            </div>
            <DownloadList  />
        </div>
    </SavedFilesContext.Provider>
  )
}

export default OCRConverter