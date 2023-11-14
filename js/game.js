const loader = document.getElementById("loader");
const container = document.getElementById("container") ;
const URL = "https://opentdb.com/api.php?amount=10&type=multiple";

let formattedData = null ;

const formatData = (questionData) => {
    const result = questionData.map(item => {
        const questionObject = {question: item.question};
        const answers = [...item.incorrect_answers];
        const correctAnswerIndex = Math.floor(Math.random() * 4);
    })
}


const fetchData = async () => {
    const response = await fetch(URL) ;
    const json = await response.json();
    // formattedData = json ;
    formatData(json.results) ;
    start();
};

const start = () => {
    loader.style.display = "none" ;
    container.style.display = "block";
};

window.addEventListener("load", fetchData) ;




