/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, list) {
      //your code here
      this.description = description

      if (priority === ""){
        this.priority = "Low"
      }else{
        this.priority = priority
      }

      if(list){
        this.listId = list.id
      }
      store.tasks.push(this)
    }

    list(){
      return store.lists.find(function(list){
        return list.id === this.listId
      }.bind(this))
    }




  }

})()
