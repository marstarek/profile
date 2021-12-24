/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add To Tasks To The Local Storage
*/

// TO DO List
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function() {
    theInput.focus();
};
let tasksArray = [];
//add task
theAddButton.onclick = function() {
    if (theInput.value.trim() === "" && tasksArray.length == 0) {
        swal("there is no task to add");
    } else if (
        (tasksArray.includes(theInput.value) && tasksArray.length > 0) ||
        theInput.value.trim() === ""
    ) {
        swal("you added this task before");
    } else {
        let noTaskeMsg = document.querySelector(".no-tasks-message");
        if (document.contains(document.querySelector(".no-tasks-message"))) {
            noTaskeMsg.remove();
        }
        tasksArray.push(theInput.value);
        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Delete");
        mainSpan.appendChild(text);
        mainSpan.className = "task-box";
        deleteElement.appendChild(deleteText);
        deleteElement.className = "delete";
        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);
        theInput.value = "";
        theInput.focus();
        calcTasks();
        delComAll();
    }
};
document.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        calcTasks();

        if (tasksContainer.childElementCount == 0) {
            creatNoTasks();
            let Alldiv = document.querySelector(".All-box");
            Alldiv.remove();
            tasksArray = [];
            calcTasks();
        }
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
        calcTasks();
    }
});

function creatNoTasks() {
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("no tasks to show");
    msgSpan.appendChild(msgText);
    msgSpan.className = "no-tasks-message";
    tasksContainer.appendChild(msgSpan);
    calcTasks();
}

function delComAll() {
    if (
        tasksArray.length == 1 ||
        theInput.value === tasksArray[0] ||
        theInput.value.trim() != ""
    ) {
        let AllDiv = document.createElement("div");
        let deleteAll = document.createElement("span");
        let completeAll = document.createElement("span");
        let completeAlltext = document.createTextNode("complete all");
        let deleteAllText = document.createTextNode("Delete all");
        AllDiv.className = "All-box";
        deleteAll.appendChild(deleteAllText);
        deleteAll.className = "deleteAll";
        completeAll.appendChild(completeAlltext);
        completeAll.className = "completeAll";
        AllDiv.appendChild(deleteAll);
        AllDiv.appendChild(completeAll);
        tasksContainer.before(AllDiv);
        calcTasks();
    }
}

function calcTasks() {
    tasksCount.innerHTML = document.querySelectorAll(
        ".tasks-content .task-box"
    ).length;
    tasksCompleted.innerHTML = document.querySelectorAll(
        ".tasks-content .finished"
    ).length;
}

function DelAll() {
    let delall = document.querySelectorAll(".tasks-content .task-box");
    for (const elem of delall) {
        elem.remove();
    }
    let Alldiv = document.querySelector(".All-box");
    Alldiv.remove();
    calcTasks();
    tasksArray = [];
}
document.addEventListener("click", function(e) {
    if (e.target.className == "deleteAll") {
        DelAll();
        calcTasks();
    }
    if (e.target.className == "completeAll") {
        CompAll();
        calcTasks();
    }
});

function CompAll() {
    let Compall = document.querySelectorAll(".tasks-content .task-box");
    for (const elem of Compall) {
        elem.classList.add("finished");
    }
    calcTasks();
    d;
}