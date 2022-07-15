const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, getLyric, getColor, getChore} = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());


app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/lyrics", getLyric);
app.get("/api/colors", getColor);
app.get("/api/chores", getChore);

app.listen(4000, () => console.log("Server running on 4000"));
