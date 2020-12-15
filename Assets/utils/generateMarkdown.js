// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.title})

  ## Description

  ${data.description}

  ## Table of Contents

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
