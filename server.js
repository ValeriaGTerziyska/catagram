const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const checkCatIdMiddleware = require("./middlewares/middleware");
const logger = require("./middlewares/loggerMiddleware");
const catsList = require("./cats");

const app = express();
const port = 5000;


app.use('/static', express.static("public"));
app.use(logger);

app.use(bodyParser.urlencoded({extended: false}))

app.engine("hbs", handlebars({ 
    extname: "hbs" 
}));
app.set("view engine", "hbs");

app.get('/', (req, res) => {
    let name = "Navcho";

    res.render("home", { name })
});

app.get('/cats', (req, res) => {

    res.render("cats", {castList: catsList.getAll()});

    // res.sendFile("./public/index.html", { root: __dirname });
    // res.sendFile(__dirname + "/views/home.html");

    // res.redirect("/");

});

app.get('/download', (req, res) => {
    res.download("./views/home.html");
});

app.get("/cats/:catId?", (req, res) => {

    if (!/\d+/.test(req.params.catId)) {
        return res.status(404).send("You need to specify cat id number");
    }

    res.send(`You're looking at profile of ${req.params.catId}`)
})

app.post("/cats", (req, res) => {
    console.log(req.body);
    let catName = req.body.cat;
    catsList.add(catName);

    res.redirect("/cats");
});

// app.all("/", (req, res) => {
//     console.log("handle all request");

//     res.send("Handle all request");
// })

app.listen(port, () => console.log(`Server is running on port ${port}...`));