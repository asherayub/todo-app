const add = document.querySelector(".add")
const generateUl = document.querySelector(".todo-list")
const createUl = document.createElement("ul")
const task = document.querySelector("input")

// for delete confirmation
const btnYes = document.querySelector(".del-yes")
const btnNo = document.querySelector(".del-no")
const deleteAll = document.querySelector(".delete-all-btn")


add.addEventListener("click", () => {
    if(task.value == ""){
        document.querySelector(".header .error").textContent = "Please Write a task to add"
        document.querySelector(".header .error").style.color = "red"
    }
    else{
        document.querySelector(".header .error").textContent = "Coded in JavaScript"
        document.querySelector(".header .error").style.color = "black"

    const liWrapper = document.createElement("div")
    const addLi = document.createElement("li")
    const delIcon = document.createElement("i")

    liWrapper.classList.add("li-wrapper")
    delIcon.classList.add("fas", "fa-trash", "remove")

    generateUl.append(createUl)
    addLi.textContent = task.value
    createUl.append(liWrapper)
    liWrapper.append(addLi)
    liWrapper.append(delIcon)
    task.value = "";

    // to check mark completed
    let completed = document.querySelectorAll("li")
    completed.forEach(compl => {
        compl.addEventListener("click", () => {
            compl.classList.add("completed")
        })
    })
}

    let deleteTask = document.querySelectorAll(".remove")
    deleteTask.forEach(del => {
        del.addEventListener("click", () => {
            del.parentElement.remove()
        })

    })

})

deleteAll.addEventListener("click", () => {
    document.querySelector(".delete-all").classList.remove("d-none")

})

btnYes.addEventListener("click", () => {
    document.querySelector("ul").textContent = ""
    document.querySelector("ul").remove()
    document.querySelector(".delete-all").classList.add("d-none")
})
btnNo.addEventListener("click", () => {
    document.querySelector(".delete-all").classList.add("d-none")
})