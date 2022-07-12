const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "inputs");

if (!fs.existsSync(inputPath)) {
  fs.mkdirSync( inputPath, { recursive: true });
}

const inputFile = async ({ filepath, input }) => {

  const jobId = path.basename(filepath).split(".")[0];
  const inPath = path.join(inputPath, `${jobId}.txt`);
  await fs.writeFileSync(inPath , input);
  return inPath;
};

module.exports = {
  inputFile
};