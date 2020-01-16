import { getTasks, useTasks, deleteTask } from "./tasksProvider.js"

const contentTarget = document.querySelector(".saved__tasks")
const eventHub = document.querySelector(".container")

const TaskListComponent = () => {
  
  eventHub.addEventListener("taskHasBeenEdited", event => {
    const updatedTask = useTasks()
        render(updatedTask)
    })
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editTask--")) {
          const [deletePrefix, taskId] = clickEvent.target.id.split("--")
          
            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                  taskId: taskId
                }
            })
            
            eventHub.dispatchEvent(editEvent)
          }

          if (clickEvent.target.id.startsWith("deleteTask--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")
            
            deleteTask(taskId).then(
              () => {
                    const theNewTasks = useTasks()
                    render(theNewTasks)
                }
                )
        }
    })
    
    const renderTasksAgain = () => {
        const allTheTasks = useTasks()
        render(allTheTasks)
        
      }

    eventHub.addEventListener("taskCreated", event => {
      renderTasksAgain()
    })
    
     eventHub.addEventListener("showTaskButtonClicked", event => {
           renderTasksAgain()
       })
      
   const render = (tasksCollection) => {
            contentTarget.innerHTML = tasksCollection.map(
                (individualTask) => {
                    return `
                        <section class="task">
                            <div>${individualTask.text}</div>
                            <button id="deleteTask--${individualTask.id}">Delete</button>
                            <button id="editTask--${individualTask.id}">Edit</button>
                        </section>
                    `
                }
              
            ).join("")
        }
      
    }
    
export default TaskListComponent