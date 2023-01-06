
const downloadTxtFile = (convertedText, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([convertedText],    
                {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.txt`;
    
    document.body.appendChild(element);
    element.click();
  }

  export default downloadTxtFile;