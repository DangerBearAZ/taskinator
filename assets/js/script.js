
var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;
var pageContentE1 = document.querySelector("#page-content");

var taskFormHandler = function(event) { 
  event.preventDefault();
var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;
var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput
  }; 
  createTaskE1(taskDataObj);
  if(!taskNameInput || !taskTypeInput) { 
    alert("You need to fill out the task form!");
    return false;
  }
  formE1.reset();
};

  var createTaskE1 = function(taskDataObj){
    // create list item
var listItemE1 = document.createElement("li");
listItemE1.className = "task-item";

//add task id as a custom attribute 
listItemE1.setAttribute("data-task-id", taskIdCounter);

// create div to hold task info and add to list item
var taskInfoE1 = document.createElement("div");
taskInfoE1.className = "task-info";

// add HTML content to div
taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemE1.appendChild(taskInfoE1);

//this is pulling from create actions *note to self
var taskActionsE1 = createTaskActions(taskIdCounter);
listItemE1.appendChild(taskActionsE1);

// add entire list item to list
tasksToDoE1.appendChild(listItemE1);

//increase task counter for next unique id 
taskIdCounter++;

  };

 
 var createTaskActions = function(taskId){
  var actionContainerE1 = document.createElement("div");
  actionContainerE1.className = "task-actions";
  //create edit button
  var editButtonE1 = document.createElement("button");
  editButtonE1.textContent = "Edit";
  editButtonE1.className = "btn edit-btn";
  editButtonE1.setAttribute("data-task-id", taskId);

  actionContainerE1.appendChild(editButtonE1);

  //create delete button
  var deleteButtonE1 = document.createElement("button");
  deleteButtonE1.textContent = "Delete";
  deleteButtonE1.className = "btn delete-btn";
  deleteButtonE1.setAttribute("data-task-id", taskId);

  actionContainerE1.appendChild(deleteButtonE1);

  var statusSelectE1 = document.createElement("select");
  statusSelectE1.className = "select-status";
  statusSelectE1.setAttribute("name", "staus-change");
  statusSelectE1.setAttribute("data-task-id", taskId);

  actionContainerE1.appendChild(statusSelectE1);

  var statusChoices = ["To Do", "In Progress","Completed"];
  for (var i = 0; i < statusChoices.length; i++) {
    //create option element
    var statusOptionE1 = document.createElement("option");
    statusOptionE1.textContent = statusChoices[i];
    statusOptionE1.setAttribute("value", statusChoices[i]);
    // append to select
    statusSelectE1.appendChild(statusOptionE1);
  }

  return actionContainerE1;
 };
 
  formE1.addEventListener("submit", taskFormHandler);

var taskButtonhHandler = function(event){
  console.log(event.target);
  if (event.target.matches(".delete-btn")) {
    //get the element's task id 
    var taskId = event.target.getAttribute("data-task-id");
    deleteTask(taskId);
  }

};

var deleteTask = function(taskId){
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  console.log(taskSelected);
  taskSelected.remove();

};

  pageContentE1.addEventListener("click", taskButtonhHandler);


