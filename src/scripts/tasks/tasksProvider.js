//John working on setting up the tasks 


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

export const getTasks = () => {
    // Load database state into application state
    return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then((taskArray) => {
            tasks = taskArray.slice()
        })
}