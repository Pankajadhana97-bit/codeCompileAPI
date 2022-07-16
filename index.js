const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { generateFile } = require('./fileGenerator');
const { inputFile }  = require('./inputfileGenerator') 
const { fileExecutor  } = require('./cppfileExecutor');
const { executePy } = require('./executePy');
const { executeJava } = require('./executeJava');
const app = express();


app.use('*',cors());
app.use(express.json());

const PORT = process.env.PORT;


app.get('/run',(req,res) =>{
    console.log(req.body);
    res.json({data : "Hello world!!!"});
});


app.post('/compile', async (req,res) => {
    
    const {code ,language , input = "Hello"} = req.body;
    const filepath = await generateFile( req.body );
    const  inputPath = await inputFile({filepath , input});
    console.log(language)
    let output = "compilation Error";
    try
    {   
        if(language === 'cpp')
        output = await fileExecutor({filepath,inputPath}); 
        if(language === 'py')
        output = await executePy({filepath,inputPath});
        if(language === 'java')
        output = await executeJava({filepath,inputPath});
    }
    catch(error) {
       console.log(error);
    }
    console.log(output);
    res.send({output : output});
});

app.listen(PORT,() =>{
    console.log(`server is started at the port http://localhost:${PORT}`)
})