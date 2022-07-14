const { exec } = require("child_process");

const executePy = async ({filepath,inputPath}) => {
  return new Promise((resolve, reject) => {
    exec(
      `python ${filepath} < ${ inputPath }`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executePy,
};