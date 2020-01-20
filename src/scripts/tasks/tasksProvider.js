//Tyler made taskProvider, John updated it 


let tasks = []

const setTasks = (tasksArray) => {
    tasks = tasksArray.slice()
}

export const useTasks = () => tasks.slice()

export const editTask = (taskObject) => {
    return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskObject)
    })
        .then(getTasks)

}

export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(getTasks)
}

export const saveTasks = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}

export const completeTask = (taskId) => {
  return fetch(`http://localhost:8000/tasks/${taskId}`, {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  .then(getTasks)
}

export const getTasks = (user) => {

    return fetch(`http://localhost:8088/tasks?userId=${user}`)
        .then(response => response.json())
        .then((taskArray) => {
            tasks = taskArray.slice()
        })
}
