

const task_label_list=document.querySelectorAll('.task_label');
const list_to_delete=document.querySelector('#fetch_del_task');
let tasks;

let task_id;
// let tasks_to_del=document.querySelectorAll('.task_checkbox');


list_to_delete.addEventListener('click',function(){

     tasks=document.querySelector('.task_checkbox:checked');

    task_id=tasks.getAttribute('data-id').trim();
    const url_req="/delete_task/"+task_id+"";
    console.log(url_req);
    list_to_delete.setAttribute("href",url_req);

});



for(let i = 0; i < task_label_list.length; i++){

    if(task_label_list[i].innerText=='PERSONAL'){
        task_label_list[i].classList.add('green');
        
       }
    
    if(task_label_list[i].innerText=='WORK'){
        task_label_list[i].classList.add('yellow');
        
       }

    if(task_label_list[i].innerText=='SCHOOL'){
        task_label_list[i].classList.add('blue');
        
       }

    if(task_label_list[i].innerText=='CLEANING'){
        task_label_list[i].classList.add('purple');
        console.log('runnig');
       }

    if(task_label_list[i].innerText=='OTHER'){
        task_label_list[i].classList.add('orange');
        console.log('runnig');
       }

}

