
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

let generateFile = async ( props ) => {
    const { code , language , input } = props;
    const fileId = uuid();
    const filename = `${ fileId }.${ language }`;
    const filepath = path.join(dirCodes,filename);
    await fs.writeFileSync(filepath , code);
    return filepath;
}

module.exports = {
    generateFile
}