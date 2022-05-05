// to develop using Express js and create the backend with server.js

const express = require('express');

const app = express();

//configure the Port
const PORT = 3001;

// send request and get response

app.get('/',(req,res) => {
    
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');

    res.sendFile(indexHtmlPath)

})

app.listen(PORT, function(){
    console.log(`App is running on http://localhost:${PORT}`);
});

