/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      //your code here
      this.title = title
      this.id = id++
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
      store.lists.push(this)
    }


}
})()
