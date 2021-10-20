
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
                  <p><h2>Discription</h2>
                      ${header.description}
                  </p>
              </div>
              <div>
                  ${header.link}
              </div>
          <div>
              <p>
                  <h2>Table of Contents:</h2>
                  <a> href="" />Installation</a></br>
                  <a> href="" />Usage</a></br>
                  <a> href="" />Contributing</a></br>
                  <a> href="" />license</a></br>
              </p>
          </div>
      </header>
      <main>
          <div>
              <div>
                  <p><h2>Installation</h2>
                      ${header.installation}
                  </p>
              </div>
              <div>
                  <p><h2>Usage</h2>
                      ${header.usage}
                      <p>Select a target directory for your image:(using the relative filepath, add it to your README using the following syntax:</P>
                      <span>${header.path}</span>
                  </p>
              </div>
              <div>
                  <p><h2>Contributing</h2>
                      ${header.contributing}
                  </p>
              </div>
              <div>
                  <p><h2>license</h2>
                      ${header.license}
                  </p>
              </div>
              <div>
                  <p><h2>Tests</h2>
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

