const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getFortune)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getLyric)

const lyricBtn = document.getElementById("lyricButton")

const getLyric = () => {
    axios.get("http://localhost:4000/api/lyrics/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getLyric)

const colorBtn = document.getElementById("colorButton")

const getColor = () => {
    axios.get("http://localhost:4000/api/colors/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

colorBtn.addEventListener('click', getColor)

const choreBtn = document.getElementById("choreButton")

const getChore = () => {
    axios.get("http://localhost:4000/api/chores/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

colorBtn.addEventListener('click', getChore)