import { saveTasks, getTasks, useTasks, editTask } from "./tasksProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".task__container")


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
                   
                }

                editTask(editedTask).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"))
                })
            } else {
                
                const newTask = {
                    text: document.querySelector("#task-text").value,
                    
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

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showTasks") {
            const message = new CustomEvent("showTaskButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Task</summary>
                <input type="hidden" id="task-id" />
                <div class="task__field">
                    Task: <input type="text" id="task-text" />
                </div>
                  
                <button class="task__field" id="saveTasks">Save Task</button>
                <button class="task__field" id="showTasks">Show Tasks</button>
            </details>
        `
    }

    render()
}

export default TaskFormComponent