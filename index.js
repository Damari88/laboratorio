const express = require("express")
const app = express ();
const PORT =  8000


app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("soy chalk");

});




app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
  });