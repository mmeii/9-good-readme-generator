// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ## Installation

  ## Usage

  ## License

  ## Contribution

  ## Tests

  ## Questions
  
`;
}

module.exports = generateMarkdown;
