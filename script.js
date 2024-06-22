const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addtask() {
    if (input.value === '') {
        alert("Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value + '<span>\u00d7</span>';
        list.appendChild(li);
    }
    input.value = '';
    savedata();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

list.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI" && !e.target.querySelector('input')) {
        let currentText = e.target.firstChild.textContent;
        let inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = currentText;
        e.target.innerHTML = '';
        e.target.appendChild(inputField);
        inputField.focus();

        inputField.addEventListener('blur', function () {
            e.target.innerHTML = inputField.value + '<span>\u00d7</span>';
            savedata();
        });

        inputField.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                inputField.blur();
            }
        });
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function showdata() {
    list.innerHTML = localStorage.getItem("data");
}

showdata();
