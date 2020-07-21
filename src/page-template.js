//function to return HTML as string
const generatePage = (name, github) => {
    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devicde-width, intital-scale=1.0">
        <meta http-equiv=X-UA-Complatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>
    
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;