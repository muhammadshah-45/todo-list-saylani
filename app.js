var inputValue = document.getElementById("input");
var taskList = document.getElementById("task-list")
function addTask(){
if(!inputValue.value.trim()){
    return alert("Please enter a task")
}
  var li = document.createElement("li");
  li.classList.add("list")
  li.textContent = inputValue.value ;

//   create a remove button
var removeBtn = document.createElement("button");
removeBtn.textContent = "Delete";
li.appendChild(removeBtn)
 
taskList.appendChild(li)

removeBtn.onclick = function (){
    taskList.removeChild(li)
}
inputValue.value = ""
}