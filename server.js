const express = require('express');
const { applyDependencies } = require('mathjs');
const app = express();
const apiRoutes = require("./routing/api-routes")
const htmlRoutes = require("./routing/html-routes")

// when deploying to Heroku, add process.env.PORT look at heroku doc.

const PORT = process.env.PORT || 3001;

//express app setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing api info and front end info
app.use(express.static("public"));
app.use(express.json());

//routing api info and front end info
app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
