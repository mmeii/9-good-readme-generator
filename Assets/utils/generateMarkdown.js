// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.title})

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  ${data.github}
  ${data.email}

  ## License

  Copyright (c) ${data.github}. All rights reserved.
  Licensed under the ${data.license} license.
  
`;
}

module.exports = generateMarkdown;
