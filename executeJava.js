const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeJava = async ({filepath , inputPath}) => {

  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}`);

  return new Promise((resolve, reject) => 
  {
    exec(`javac --source-path src -d bin ${outputPath} ${filepath} && java -cp bin ${jobId} < ${ inputPath }`,(error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
    executeJava,
}