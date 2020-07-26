var list = document.getElementById("list");
//function for adding  an item
function addItem(){
    var todo_item = document.getElementById("todo-item"); 
//creating li tag with text node
    var li = document.createElement('li')
    li.setAttribute("class","li-list")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
//creating delete button
var delBtn = document.createElement("button")
var delText = document.createTextNode("Delete")
delBtn.setAttribute("class","btn btn-primary")
delBtn.setAttribute("id","innerBtn1")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)
//creating edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("class","btn btn-primary")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)
//appending buttons to li tag

    li.appendChild(delBtn)
    li.appendChild(editBtn)
     
    
    list.appendChild(li)


    todo_item.value = ""
    console.log(li)
}
//function for deleting an item
function deleteItem(item){

    item.parentNode.remove()

}
//function for editing an item
function editItem(item){
    var val = item.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter value:",val)
    item.parentNode.firstChild.nodeValue = editValue
}
//function for deleting all items
function deleteAllItems(){
    list.innerHTML = ""
}
