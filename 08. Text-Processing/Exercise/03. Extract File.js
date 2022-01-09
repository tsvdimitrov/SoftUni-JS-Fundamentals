function extractFile(string) {

    let pointIndex = string.lastIndexOf(".")
    let extension = string.substring(pointIndex + 1);

    let lastLine = string.lastIndexOf("\\");
    let fileName = string.substring(lastLine + 1, pointIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
