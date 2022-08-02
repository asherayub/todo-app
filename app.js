const add = document.querySelector(".add")
const generateUl = document.querySelector(".todo-list")
const createUl = document.createElement("ul")
const task = document.querySelector("input")



add.addEventListener("click", () => {
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

    let deleteTask = document.querySelectorAll(".remove")
    deleteTask.forEach(del => {
        del.addEventListener("click", () => {
            del.parentElement.remove()
        })

    })

})

const deleteAll = document.querySelector(".delete-all")
deleteAll.addEventListener("click", () => {
    document.querySelector("ul").textContent = "";
    document.querySelector("ul").remove();
})