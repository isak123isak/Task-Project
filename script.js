const input = document.querySelector("input");
const btn = document.querySelector(".addTask > button");

function addList(e){
    const notCompleted = document.querySelector(".notCompleted");
    
    const Completed = document.querySelector(".Completed");

    const newLi = document.createElement("li");
    const checkBtn = document.createElement("button");
    const delckBtn = document.createElement("button");

    checkBtn.innerHTML = <i class="fa-solid fa-circle-check"></i>;
    delckBtn.innerHTML = <i class="fa-regular fa-trash-can"></i>;

}
