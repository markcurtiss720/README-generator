// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if(license === "unlicensed"){
    return badge;
  } else {
    badge = `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license === "unlicensed") {
    return link;
  } else {
    link = `https://opensource.org/licenses/${license}`
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseBadge, licenseLink) {
  let section = "";
  if (license === "unlicensed") {
    return section;
  } else {
    section = `## License
    
  ${licenseBadge}\b

  ${licenseLink}`

    return section;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license, licenseBadge, licenseLink)
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

${data.credits}

${licenseSection}


## Contributing

${data.contributing}

## Tests

${data.tests}


## Questions

If you have any questions please reach out via email: ${data.email}

or find me on Github: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
