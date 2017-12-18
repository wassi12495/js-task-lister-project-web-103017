let store = {lists: [], tasks:[]}


let submitNewList = document.getElementById("create-list-form-submit")
let submitNewTask = document.getElementById("create-task-form-submit")
let listTitleInput = document.getElementById("new-list-title")
let newTaskInput = document.getElementById("create-task-form")

document.addEventListener('DOMContentLoaded', () => {
  // your code here ....
  let deleteButtons = document.getElementsByClassName("delete-list")
  console.log(deleteButtons)

});
submitNewList.addEventListener('click', function(event){
  event.preventDefault()
  let lst = new List(listTitleInput.value)
  addToDropDown(lst)
  console.log(lst)
  listTitleInput.value = ""
})

submitNewTask.addEventListener('click', function(event){
  event.preventDefault()
  let description = document.getElementById("new-task-description")
  console.log(description)
  let priority = document.getElementById("new-task-priority")
  console.log(priority)
  let list = store.lists.find(function(lst){
    return parseInt(document.getElementById("parent-list").value) === lst.id
  })
  console.log(list)
  let tsk = new Task(description.value, priority.value, list )
  addTaskToList(tsk)
  document.getElementById("new-task-description").value  = ""
  document.getElementById("new-task-priority").value = ""
})

function addToDropDown(list){
  let parentList = document.getElementById("parent-list")
  let newList = document.createElement("option")
  newList.innerText = list.title;
  newList.value = list.id
  newList.id = `list-option-${list.id}`
  parentList.appendChild(newList)
  console.log(newList)
  addNewList(list)

}

function addNewList(list){

  let lists = document.getElementById("lists")
  let divList = document.createElement("div")
  divList.id = `list-${list.id}`
  lists.appendChild(divList)
  let h2 = document.createElement("h2")
  let but = document.createElement("button")
  h2.id = `list-${list.id}-h2`
  but.innerText = "X"
  but.className = "delete-list"
  but.value = list.id
  but.addEventListener('click', function(e){
    e.preventDefault()
    deleteClicked(but)
  })
  divList.appendChild(but)
  divList.appendChild(h2)
  h2.innerText += `${list.title}`
  let ul = document.createElement("ul")
  ul.id = `list-${list.id}-tasks`
  divList.appendChild(ul)
}

function addTaskToList(task){
  console.log(task)
  let list = task.list()
  console.log(list.id)
  let ul = document.getElementById(`list-${list.id}-tasks`)
  let li = document.createElement("li")
  li.id = task.id
  let br = document.createElement("br")
  ul.appendChild(li)
  li.innerText = (`Task: ${task.description}`)
  li.appendChild(br)
  li.innerText += (`Priority: ${task.priority}`)
}

function deleteClicked(button){
  console.log("clicked")
  let divList = button.parentElement
  console.log(divList)
  divList.innerText = ""
  divList.remove()

  let listId = parseInt(button.value)
  let opt = document.getElementById(`list-option-${listId}`)
  opt.remove()

  // console.log(listId)
  // let list = List.findById(listId)
  // console.log(list)
  // let lst = store.lists.find(function(list){
  //   console.log(this.listID)
  //    return list.id === listID
  // }.bind(this))
  // console.log(lst)
}
