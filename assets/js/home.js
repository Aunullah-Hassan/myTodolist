const task_label_list=document.querySelectorAll('.task_label');
console.log(task_label_list);

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

