// let p =document.getElementById("inc1")
// let q =document.getElementById("inc2")
// let r =document.getElementById("inc3")
// // let title =document.getElementsByClassName("card-title")
// p.style.display="none"
// q.style.display="none"
// r.style.display="none"

// submit.addEventListener("click", (e)=>{
//     let titlec= title.value
//     let descc = desc.value
//     let timecc = time.value
//     localStorage.setItem("todo", JSON.stringify([titlec, descc, timecc]))
//     console.log(e)


//     if(p.style.display==="none"){
//         p.style.display="block"
//     }
//     if(q.style.display==="none"){
//         qstyle.display="block"
//     }
//     // if(r.style.display==="none"){
//     //     r.style.display="block"
//     // }
// console.log(localStorage.getItem("todo"))
// let b = JSON.parse(localStorage.todo)
// console.log(b)

//     // else{p.style.display="none"}
//     document.getElementById("t1").innerHTML=b[0];
//     document.getElementById("para1").innerHTML=b[1];
//     document.getElementById("sam1").innerHTML=b[2];
//     // title.value=""
//     // desc.value=""
//     // time.value=""
// }
// )
// d1.addEventListener("click", (e)=>{
//     localStorage.removeItem("todo")
//     p.style.display="none"
// }
// )

// deletebtn.addEventListener("click", (e)=>{
//     localStorage.clear()
//     // localStorage.removeItem("todo")
//     p.style.display="none"
// }
// )


function add() {
    let intitle = document.getElementById('title');
    let indesc = document.getElementById('desc');
    let intime = document.getElementById("time");
    
    let todos = localStorage.getItem("todos");
    let todosobj = todos ? JSON.parse(todos) : [];
    
    let newTodo = {
      title: intitle.value,
      description: indesc.value,
      time: intime.value
    };
    
    todosobj.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todosobj));
    updatei();
  }
  


submit.addEventListener("click", (e)=>{
    add();
    title.value=""
    time.value=""
    desc.value=""
    updatei();
   
})

deletebtn.addEventListener("click", (e)=>{
    localStorage.clear()
    updatei()

})


const updatei=()=>{
    let todos= localStorage.getItem("todos")
    if (todos == null) {
        document.getElementById('inc').innerHTML = `<h1 class="text-center text-3xl text-white t" "style='text_align:center;'">NO Todos</h1>`
        todosobj = [];
    }
    
    todosobj = JSON.parse(todos)
 document.getElementById('inc').innerHTML = `<h1 class="text-center text-3xl text-white">No Todos</h1>`

 
 let todoitem =" ";
 
 todosobj.map((element, index)=>{
     todoitem = todoitem+
     // document.getElementById('inc').innerHTML = `<p class="text-bold text-3xl my-5 text-center text-white">${element[0]}</p>`
     `
     <div id="inc1" class="card" style="width: 18rem; height: max-content; margin-top: 5px;">
     <div  class="card-body">
         <h5 id="t1" class="card-title" style="display: inline-block; width: 3rem;"> ${element.title} </h5>
         <i  id="d1"  onclick="deletei(${index})" class="fa-solid fa-trash i" style="position: relative; left: 70%;"></i>
         <p id="para1" class="card-text">${element.description}</p>
         <p id="sam1" class="card-text">${element.time}</p>

     </div>
 </div>`
//  document.getElementById("inc").innerHTML= `<h1 class="text-center text-3xl text-white">Your Todos</h1>` + todoitem;

inc.innerHTML= `<h1 class="text-center text-3xl text-white">Your Todos</h1>` + todoitem;


 })
    }

const deletei=(i)=>{
    let todos = localStorage.getItem("todos")
    let todosobj = todos ? JSON.parse(todos) : [];
    todosobj.splice(i,1);
    localStorage.setItem("todos", JSON.stringify(todosobj));

    updatei();
}

updatei();





// const getAndUpdate = () => {
//     let tit = document.getElementById('title');

//     let desc = document.getElementById('desc');
    
//     let todos = localStorage.getItem('todos')
    

//         if (todos == null) {
//             todosObj = [];
//             todosObj.push([tit.value, desc.value])
//             localStorage.setItem('todos', JSON.stringify(todosObj))
//         }
//         else {
//             todosObj = JSON.parse(todos)
//             todosObj.push([tit.value, desc.value])
//             localStorage.setItem('todos', JSON.stringify(todosObj))
//         }
//         tit.value = ("")
//         desc.value = ("")
//         update();
//     }




// const add = () => {
//     getAndUpdate();
// }



// const update = () => {
//     let todos = localStorage.getItem('todos')
//     if (todos == null) {
//         todosObj = [];
//         document.getElementById('notesdiv').innerHTML = `<p class="text-bold text-3xl my-5 text-center text-white">No Todo's to display</p>`
//     }
//     else {
//         todosObj = JSON.parse(todos)
//         document.getElementById('notesdiv').innerHTML = `<p class="text-bold text-3xl my-5 text-center  text-white">No Todo's to display</p>`
//     }
//     let todoitems = " ";
//     todosObj.map((element, index) => {
//         todoitems += `
// <div class="lg:flex my-5 min-h-[100px] px-5 py-3 border border-gray-700 mx-3 rounded lg:items-center w-1/1 bg-gray-800 lg:justify-between">
// <div class="min-w-fit  min-h-[60px] flex-1">
// <h2 class="text-2xl text-white font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">${element[0]}</h2>
// <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
// <div class="mt-2 flex items-center text-1xl text-gray-500">${element[1]}</div> 
// </div>
// </div>
// <span class="sm:ml-3 min-w-fit flex  items-center justify-center ">
// <button  onclick="deletei(${index})" type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
// Delete
// </button>
// </span>
// </div>`
//         document.getElementById('notesdiv').innerHTML = `<h1 class="text-center text-3xl text-white">Your Todos</h1>` + todoitems
//     })
// }
// const deletei = (i) => {
//     let todos = localStorage.getItem('todos')
//     todosObj = JSON.parse(todos)
//     todosObj.splice(i, 1);
//     localStorage.setItem('todos', JSON.stringify(todosObj));
//     alertbx.innerHTML = `<p class="text-white">Deleted the Todi no. ${i + 1}</p>`
//     update();
// }

// const clearstr = () => {
//     let usr = confirm("Do you really want to clear storage")
//     if (usr) {
//         localStorage.clear()
//     }
//     update();
// }
// update();