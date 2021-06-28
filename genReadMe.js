function genReadMe(data) {
    return `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}%20-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents: 

*  [Description](#description)
*  [Installation](#install)
*  [Usage](#usage)
*  [Contributing](#contributing)
*  [Tests](#tests)
*  [Questions](#questions)
*  [License](#license)

## :scroll: Description: 

${data.description}

## :man_mechanic: Installation:

${data.install}

## :book: Usage Info:

${data.usage}

## :couple: Contributors:

${data.contributing}

## :woman_scientist: Tests:

${data.tests}

## ❓ Questions:

Got questions? Feel free to reach out to me!<br>
Github: [https://github.com/${data.github}](https://github.com/${data.github})<br>
Email: [${data.email}](${data.email})

## License:
[${data.license}](https://opensource.org/licenses)<br>
CLICK TO VIEW TERMS AND CONDITIONS OF ALL OPEN SOURCE LICENSES.


`;
}

module.exports = genReadMe;