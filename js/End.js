const score = JSON.parse(localStorage.getItem("score"));
const scoreElement = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");


scoreElement.innerText = score ;

const saveHandler = () => {
    if(input.value || !score) {
        alert("Invalid Username Or Score!")
    } else {
        const finalScore = {name: input.value, score}
    };
};


button.addEventListener("click", saveHandler)