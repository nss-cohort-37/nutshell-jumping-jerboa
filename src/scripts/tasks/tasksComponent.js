import { saveTasks, getTasks, useTasks, editTask } from "./tasksProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".save__task")


const TaskFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const taskToBeEdited = event.detail.taskId

        const allTasksArray = useTasks()

        const theFoundedTask = allTasksArray.find(
            (currentTaskObject) => {
                return currentTaskObject.id === parseInt(taskToBeEdited, 10)
            }
        )

        document.querySelector("#task-id").value = theFoundedTask.id
        document.querySelector("#task-text").value = theFoundedTask.text
    })

    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveTasks") {
            
            const hiddenInputValue = document.querySelector("#task-id").value

            
            if (hiddenInputValue !== "") {
                const editedTask = {
                    id: parseInt(document.querySelector("#task-id").value, 10),
                    text: document.querySelector("#task-text").value,
                    userId: parseInt(sessionStorage.getItem("activeUser"), 10)
                   
                }

                editTask(editedTask).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"))
                })
            } else {
                
                const newTask = {
                    text: document.querySelector("#task-text").value,
                    userId: parseInt(sessionStorage.getItem("activeUser"), 10)
                   
                    
                }

                saveTasks(newTask).then(
                    () => {
                        const message = new CustomEvent("taskCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

     

    const render = () => {
        contentTarget.innerHTML = `
            
              <div class="input-group-append">
                <input type="hidden" id="task-id" />
                
                    <input type="text" id="task-text" placeholder="add new task..."/>
                

                <div class="input-group-append">
                <button class="btn btn-outline-primary task__field" id="saveTasks">Save</button>
                </div>
                </div>
          
        `
    }

    render()
}

export default TaskFormComponent