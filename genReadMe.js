function genReadMe(data) {
    return `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}%20-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents: 

*  [Description](#scroll-description)
*  [Installation](#man_mechanic-installation)
*  [Usage](#book-usage-info)
*  [Contributing](#couple-contributors)
*  [Tests](#woman-scientist-tests)
*  [Questions](#-questions)
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