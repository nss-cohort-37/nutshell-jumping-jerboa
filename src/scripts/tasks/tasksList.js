//John working on tasks still. Mac got the userID thing working.

import { getTasks, useTasks, deleteTask } from "./tasksProvider.js"

const contentTarget = document.querySelector(".task__container")
const eventHub = document.querySelector(".container")

const TaskListComponent = () => {
  const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
  const tasks = useTasks()
  eventHub.addEventListener("userLoggedIn", event => {

    
    
    getTasks(currentUser).then(
      () =>{




        eventHub.addEventListener("taskHasBeenEdited", event => {
          const updatedTask = useTasks()
              render(updatedTask)
          })

        
      }
    )

    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("completeTask--")) {
        const [prefix, taskId] = clickEvent.target.id.split("--")
        const tasks = useTasks()
        const completedTask = tasks.find(task => task.id === parseInt(taskId, 10))
        console.log(completedTask)
        const element = document.getElementById(`task--${completedTask.id}`)
        element.classList.add("completedTask")
      }
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
  
          if (clickEvent.target.id.startsWith("deleteTask--")) {debugger
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")
            
            deleteTask(taskId).then(
              () => {
                    const theNewTasks = useTasks()
                    renderTasksAgain(theNewTasks)
                }
                )
        }
    })
    
    const renderTasksAgain = () => {
        getTasks(currentUser).then(
          () => {
              const allTheTasks = useTasks()
              render(allTheTasks)

          }
        )
        
      }
    
      
          eventHub.addEventListener("taskCreated", event => {
            renderTasksAgain()
          })
          
          
    
            
             
             

          const render = (tasksCollection) => {
                   contentTarget.innerHTML = tasksCollection.map(
                       (individualTask) => {
                           return `
                               <section id="task--${individualTask.id}" class="card task__card">
                                   <h4 class="card-title">${individualTask.text}</h4>
                                   <button class="btn btn-outline-primary btn-sm" id="completeTask--${individualTask.id}">Complete</button>
                                   <div class="card__buttons">
                                    <div class="edit" id="deleteTask--${individualTask.id}">Delete</div>
                                    <div class="edit" id="editTask--${individualTask.id}">edit</div>
                                   </div>
                               </section>
                           `
                       }
                     
                   ).join("")
               }
          
         getTasks(currentUser).then( () => {

           const tasks = useTasks()
           render(tasks)

         }
           
           )




            })
            
                
                   
                 }
    
export default TaskListComponent