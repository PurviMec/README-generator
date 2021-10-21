
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
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
  </head>

  <body >
      <header class="m-5 pl-10 pr-10">
          <div class="" >
              <div class = 'm-1'>
                  <h1 class= 'm-1'  style='border-bottom:1px solid gray;'>${header.name}</h1>
                  <img src ='https://img.shields.io/badge/License-${header.license}-yellow.svg'/><br />
                  <p><h2 class= 'm-2' style='border-bottom:1px solid gray;'>Discription</h2>
                      <p class = 'p-2'>${header.description}</p>
                      <p class = 'p-2'><a href='${header.link}' alt=''>${header.link}</a></p>
                  </p>
              </div>
          </div>    
          <div>
              <p>
                  <h2 class= 'm-1' style='border-bottom:1px solid gray;'>Table of Contents:</h2>
                  <div class = 'p-2'>
                  <a href="#Installation" href=''>Installation</a></br>
                  <a href="#Usage" href=''>Usage</a></br>
                  <a href="#Contribution" href=''>Contributing</a></br>
                  <a href="#Tests" href=''>Tests</a></br>
                  </div>
              </p>
          </div>
      </header>
      <main class="m-5 pl-10 pr-10">
          <div>
              <div>
                  <p><h2 class= 'm-1' style='border-bottom:1px solid gray;'>Installation</h2>
                      <p class = 'p-2'>${header.installation}</p>
                  </p>
              </div>
              <div>
                  <p><h2 class= 'm-1' style='border-bottom:1px solid gray;'>Usage</h2>
                      <p class = 'p-2'>${header.usage}></p>
                  </p>
              </div>
              <div>
                  <p><h2 class= 'm-1' style='border-bottom:1px solid gray;'>Contributing</h2>
                      <p class = 'p-2'>${header.contributing}</p>
                  </p>
              </div>
              <div>
                  <p><h2 class= 'm-1' style='border-bottom:1px solid gray;'>license</h2>
                      <p class = 'p-2'>${header.license}
                      <a href = 'https://opensource.org/licenses/${header.license}' class = 'p-2' >More Info regarding license</a></p>
                  </p>
              </div>
              <div>
                  <p><h2 class= 'm-1' style='border-bottom:1px solid gray;'>Tests</h2>
                      <p class = 'p-2'>${header.tests}</P>
                  </p>
              </div>
          </div>
          
      </main>
      <footer class=" m-5">
          <p class = 'p-2'>GitHub UserName: ${header.gitHub}</p>
          <p class = 'p-2'>GitHub URL: <a href= '${header.gitHubURL}' alt= ''>${header.gitHubURL}</a></p>
          <p class = 'p-2'>Email Address: <a href="mailto: ${header.email}" alt= ''>${header.email}</a></p>
      </footer>
  </body>
  </html>
    `;
};
