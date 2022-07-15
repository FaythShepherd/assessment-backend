module.exports = {
    getChore: (req, res) => {
        const lyrics = [
            "Do the dishes",
            "Vaccum the house",
            "Clean all the mirrors",
            "Take out the trashes",
            "Clean the toliet",
            "Fold the laundry",
            "You choose!"
            ]
        //gives a random chore
        let randomIndex = Math.floor(Math.random() * chores.length);
        let randomChore = chores[randomIndex];

        res.status(200).send(randomChore);
        
    },
    getColor: (req, res) => {
        const lyrics = [
            "PINK!",
            "Blue",
            "Red",
            "GREEEEENNNNN",
            "Grey",
            "White",
            "Purple"
            ]
        //gives a random color
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        res.status(200).send(randomColor);
        
    },
    getLyric: (req, res) => {
        const lyrics = [
            "Somebody told me you had a boyfriend",
            "And I was like Baby, Baby, Baby ohhhhhh",
            "HHHHHHAAPPPPY Birthday to youuuuuuu",
            "Party in the USA",
            "Looked around, turned the radio down"
            ]
        //gives a random lyrics
        let randomIndex = Math.floor(Math.random() * lyrics.length);
        let randomLyric = lyrics[randomIndex];

        res.status(200).send(randomLyric);
        
    },
    getFortune: (req, res) => {
        const fortunes = [
            "A faithful friend is a strong defense.",
            "A feather in the hand is better than a bird in the air.",
            "A fresh start will put you on your way.",
            "A friend asks only for your time not your money.",
            "A friend is a present you give yourself."
            ]
        //gives a random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
        
    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}