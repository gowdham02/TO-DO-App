const inputbox =  document.getElementById("input-box");
const listcontainer =  document.getElementById("list-contailer");


function addtask(){
    if(inputbox.value===''){
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = ""
    savedate();
}
listcontainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    savedate();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedate();
}
},false);

function savedate(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
    }
showtask();    
