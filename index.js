let count = 0;
document.getElementById('add-button').addEventListener('click', function(){
    count++;
// get user input value
    const inputValue = document.getElementById('input-value').value;
//create an element
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML =
     `
    <th>${count}</th>
    <td> <p> ${inputValue}  </p> </td>
    <td>
        <button class="btn btn-success done-btn">Done</button>
        <button class="btn btn-danger delete-btn">Delete</button>
    </td>
    `;
// append the element the main container
    const mainContainer = document.getElementById("content-container");
    mainContainer.appendChild(tableContainer);
// clear the input value
document.getElementById('input-value').value = "";



//done work button
    const doneButton = document.getElementsByClassName('done-btn');
    for(const buttons of doneButton){
        buttons.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.color = 'green';
            e.target.parentNode.parentNode.style.fontWeight = 'bolder';
            // console.log(e.target.parentNode.parentNode.querySelector('p'));
            // e.target.parentNode.parentNode.innerText = 'completed';
            e.target.parentNode.parentNode.querySelector('p').innerText = 'completed';

        })
    }


    //delete  button work
    const deleteButton = document.getElementsByClassName('delete-btn');
    for(const buttons of deleteButton){
        buttons.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = 'none';
        })
    }
})



//Finish Task

//  const completeButton = document.getElementsByClassName("complete");
//  for (const button of completeButton) {
//      button.addEventListener("click", function (e) {
//          const trackTodoItem = e.target.parentNode.parentNode.parentNode.childNodes[0];
//          trackTodoItem.style.textDecoration = 'line-through';
//          trackTodoItem.style.color = 'rgb(117 112 145)';
//          const trackStatus = e.target.parentNode.parentNode.parentNode.childNodes[2];
//          trackStatus.innerText = 'Completed'; 
//          trackStatus.style.color = '#198753';
//      })
//  }


//Delete Task

// const deleteButton = document.getElementsByClassName("delete");
// for (const button of deleteButton) {
//     button.addEventListener("click", function (e) {
//         const trackTr = e.target.parentNode.parentNode.parentNode.parentNode;
//         trackTr.removeChild(e.target.parentNode.parentNode.parentNode);
        
        
//     })

    
// }