import Tesseract from "tesseract.js";


const convertToText = (image, setState) => {
    Tesseract.recognize(
        image,
        'eng',
        { logger: m => {
          setState({loading: true, convertedText: null});

        } }
      ).then(({ data: { text } }) => {
        setState({loading: false, convertedText: text});

      }).catch(err => console.log(err))
}

export default convertToText;