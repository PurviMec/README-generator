
module.exports = templateData => {
    const { main, ...header } = templateData;
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
          <h1>${header.name}</h1>
          <p><h3>Discription</h3>
              ${header.description}
          </p>
      </header>
      <main>
      </main>
  </body>
  </html>
    `;
};

