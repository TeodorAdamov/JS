function extractFile(str) {

    const dataArr = str.split('\\');
    const file = dataArr.pop();
    const tokens = file.split('.');
    const fileExtension = tokens.pop();

    console.log(`File name: ${tokens.join('.')}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')