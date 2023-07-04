const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", Addnewtime);

function Addnewtime(){
    const createDiv = document.createElement("div");
    const areajamkerjaSenin = document.getElementById("jam-kerja-senin");
    console.log("add")
    createDiv.classList.add("timeRange-style");
    areajamkerjaSenin.appendChild(createDiv);
}