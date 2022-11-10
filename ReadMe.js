const inquirer = require('inquirer');
const fs = require('fs');


// ask readme file information

inquirer
  .prompt([
    {
            type: 'input',
            name: 'projectName',
            message: 'Project name:',
        },
        {
            type: 'input',
            name: 'liveSite',
            message: 'Live Site URL:',
        },
        {
            type: 'input',
            name: 'task',
            message: 'What was the task:',
        },
        {
            type: 'input',
            name: 'userStory',
            message: 'Describe user Story:',
        },
        {
            type: 'input',
            name: 'acceptanceCriteria',
            message: 'Describe Acceptance Criteria:',
        },
        {
            type: 'input',
            name: 'mockup',
            message: 'Mockup URL:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe Instalation process:',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List credit user/s:',
        },
         
        {
            type: 'list',
            name: 'license',
            message: 'What is the license type:',
            choices:["MIT","No license", "Other"],
        },
        




        ])
        .then((response)=>{
        //   console.log(response);
          response.license === 'MIT'
          ? response.license = "MIT License \nCopyright (c) [2022] [Liliana Bazand]\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the 'Software'), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE."        
          : response.license = "Not available"
          
          
          const filename = `${'README.md'}`;
          fs.writeFile(filename,getREADME(response), (err) =>
          err ? console.log(err) : console.log('suscces!'))

          
        });

const getREADME = (response) => {
    return  `
  
# 09 ${response.projectName} 🎉

## Live Site
[Live Site](${response.liveSite}).
    
----    
## Your Task
    
${response.task}



-----
## User Story

${response.userStory}


----
## Acceptance Criteria

* ${response.acceptanceCriteria}
    


----
## Mock-Up
    
${response.mockup}


----
## Installation
${response.installation}

-----
## Credits

${response.credit}

----
# License
${response.license}
    `
}