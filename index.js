const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

// Middleware
const port = 5000;
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
    res.render('first');
});
app.get("/stores", (req, res) => {
    res.render('stores');
});
app.get("/login", (req, res) => {
    res.render('login');
});
app.get("/book", (req, res) => {
    res.render('book');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get("/places", (req, res) => {
    res.render('places');
});
app.get("/signup", (req, res) => {
    res.render('signup');
});

// Feedback route
app.post("/sendfeedback", (req, res) => {
    const { name, email, number, text } = req.body;

    // Validate inputs
    if (!name || !email || !number || !text) {
        // Respond with an error message
        return res.status(400).json({ success: false, message: "All inputs are required" });
    }

    // Log the data and respond with success
    console.log(name, email, number, text);
    res.status(200).json({ success: true, message: "Feedback received successfully" });
});
app.post("/loginfeedback", (req, res) => {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password ) {
        // Respond with an error message
        return res.status(400).json({ success: false, message: "All inputs are required" });
    }

    // Log the data and respond with success
    console.log(password, email,);
    res.status(200).json({ success: true, message: "Feedback received successfully" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
 