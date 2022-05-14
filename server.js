// to develop using Express js and create the backend with server.js
// this must NOT be in the public file as it is backend
const express = require('express');
const webrouter = require('./routing/web');
const apifile = require('./routing/api');
const app = express();

//configure the Port
const PORT = 3001;

app.use (express.json())
app.use( express.static('public') );
// send request and get response
app.use (webrouter)
app.use (apifile)
app.get('/',(req,res) => {
    
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');

    res.sendFile(indexHtmlPath)

})

app.listen(PORT, function(){
    console.log(`App is running on http://localhost:${PORT}`);
});

