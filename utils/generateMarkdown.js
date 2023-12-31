// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  }
  return `![license](https://img.shields.io/badge/License-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ''
  }
  return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  }
  return `## License

This application is covered under license: ${license}.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributions](#contributions)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributions

${data.contributions}

${renderLicenseSection(data.license) }

## Questions

Check out my Github Profile: [Github](https://github.com/${data.github})\n
Please reach me at here if you have any questions: [${data.email}](${data.email})\n

<a src="" type="video/mp4">[![ReadMeGen.mp4](https://drive.google.com/uc?export=download&id=ReadMeGen.mp4)](https://drive.google.com/file/d/ReadMeGen.mp4/view)

`;
}

module.exports = generateMarkdown;
