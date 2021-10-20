
module.exports = templateData => {
  console.log(templateData);
  const { about, ...header } = templateData;
    return`
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>README Generator</title>
  </head>

  <body>
      <header>
          <div>
              <div>
                  <h1>${header.name}</h1>
                  <p><h3>Discription</h3>
                      ${header.description}
                  </p>
              </div>
              <div>
                  ${header.link}
              </div>
          <div>
              <p>
                  <h3>Table of Contents:</h3>
                  <link href="" />Installation</br>
                  <link href="" />Usage</br>
                  <link href="" />Contributing</br>
                  <link href="" />license</br>
              </p>
          </div>
      </header>
      <main>
          <div>
              <div>
                  <p><h3>Installation</h3>
                      ${header.installation}
                  </p>
              </div>
              <div>
                  <p><h3>Usage</h3>
                      ${header.usage}
                      <p>Select a target directory for your image:(using the relative filepath, add it to your README using the following syntax:</P>
                      <span>${header.path}</span>
                  </p>
              </div>
              <div>
                  <p><h3>Contributing</h3>
                      ${header.contributing}
                  </p>
              </div>
              <div>
                  <p><h3>license</h3>
                      ${header.license}
                  </p>
              </div>
              <div>
                  <p><h3>Tests</h3>
                      ${header.tests}
                  </p>
              </div>
          </div>
          <div>
              <p>GitHub UserName: <a href="">${header.gitHub}</a></p>
              <p>Email Address: <a href="">${header.email}</a></p>
          </div>
      </main>
  </body>
  </html>
    `;
};

