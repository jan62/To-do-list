// let tasks = []

// let imgDone, imgCorrect, imgTrash

// imgDone = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
// <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
// <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
// </svg>`

// imgCorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
// </svg>`

// imgTrash = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
//     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
// </svg>`

// let output = document.getElementById('output')
// const addTodo = () => {
//     let input = document.getElementById('inputText')
//     const todo = {
//         id: tasks.length + 1,
//         name: input.value,
//         completed: false,
//     }
//     tasks.push(todo)
//     input.value = ''
//     renderTodos()
//     // console.log(tasks)
// }
// const renderTodos = () => {
//     output.innerHTML = ''
//     tasks.forEach(el => {
//         let card = document.createElement('div')
//         let h = document.createElement('h2')
//         let btns = document.createElement('div')
//         let done = document.createElement('button')
//         let trash = document.createElement('button')
//         let correct=document.createElement('button')

//         card.classList = el.completed == true ? 'active' : 'card'
//         h.innerHTML = el.name
//         done.innerHTML = imgDone
//         correct.innerHTML = imgCorrect
//         trash.innerHTML = imgTrash

//         card.append(h)
//         btns.append(done)
//         btns.append(correct)
//         btns.append(trash)
//         card.append(btns)
//         output.append(card)

//         let id = el.id
//         done.addEventListener('click', () => {
//             tasks.forEach(el => {
//                 if (el.id == id) {
//                     el.completed = !el.completed
//                 }
//             })
//             renderTodos()
//         })
//             // let id = el.id
//             trash.addEventListener('click', () => {
//                 tasks.forEach(el => {
//                     if (el.id == id) {
//                         el.completed = !el.completed
//                         task=task.filter(item=>item!=el)
//                     }
//     })
//     renderTodos()})


let tasks = []

let imgDone, imgCorrect, imgTrash

imgDone = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>`

imgCorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>`

imgTrash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>`

let output = document.getElementById('output')

const addTodo = () =>{
    let input = document.getElementById('inputText')
    const todo = {
        id: tasks.length + 1,
        name: input.value, 
        completed: false
    }
    tasks.push(todo)
    addToLocalStorage()
    input.value = ''
    
}

const renderToDos = () => {
    output.innerHTML = ""
    tasks.forEach(el => {
        let card = document.createElement('div')
        let h = document.createElement('h2')
        let btns = document.createElement('div')
        let done = document.createElement('button')
        let correct = document.createElement('button')
        let trash = document.createElement('button')
        
        card.classList = el.completed == true ? 'active' : 'card'

        h.innerHTML = el.name
        done.innerHTML = imgDone
        correct.innerHTML = imgCorrect
        trash.innerHTML = imgTrash

        card.append(h)
        card.append(btns)
        btns.append(done)
        btns.append(correct)
        btns.append(trash)
        output.append(card)

        let id = el.id
        done.addEventListener('click', () => {
            tasks.forEach(el => {
                if(el.id == id){
                    el.completed = !el.completed
                }
            })
            addToLocalStorage()
        })

        trash.addEventListener('click',()=>{
            let con =confirm('dfgd')
            if (con) {
                tasks=tasks.filter(el=>el.id!=id)
            }
            addToLocalStorage()
        })

        // trash.addEventListener('click', () => {
        //     tasks.forEach(el => {
        //         if(el.id == id){
        //             el.completed = !el.completed
        //             tasks = tasks.filter(item => item != el)
        //         }
        //     })
        //     renderToDos()
   
        correct.addEventListener('click', () => {
            let cor=prompt('введите новую запись!')
            tasks.forEach(el => {
                if(el.id == id){                
                    let pr = confirm('Действительно ли вы хотите заменить запись?')
                    let (pr);{
                    el.name=cor
                }
                }
            })
            addToLocalStorage()
        })
          })
   
    // correct.addEventListener('correct',()=>{
    //     if(localStorage.getItem('isChecked')==='true'){
    //         localStorage.removeItem('isChecked')
    //         correct.checked
    // }else{
    //     localStorage.setItem('isChecked','true')
    //     !correct.checked
    // }})
}

const addToLocalStorage=()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks)    )
    renderToDos()
}
const getFromLocalStorage =()=>{
    const reference=localStorage.getItem('tasks')
    if (reference){
        tasks=JSON.parse(reference)
        renderToDos()
    }
}
getFromLocalStorage()
