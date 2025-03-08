let count = 0;
setDay('day');
setFullDate('full-date');

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', function(){
    count++;
    disable(btn1, count);
    
});

const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', function(){
    count++;
    disable(btn2, count);
});

const btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', function(){
    count++;
    disable(btn3, count);
});

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', function(){
    count++;
    disable(btn4, count);
});

const btn5 = document.getElementById('btn-5');
btn5.addEventListener('click', function(){
    count++;
    disable(btn5, count);
});

const btn6 = document.getElementById('btn-6');
btn6.addEventListener('click', function(){
    count++;
    disable(btn6, count);
});

// task-assigned id
// common functions
function disable(btn, count){
    if(count<6){
        
        alert('Board Updated Successfully');
        changeTaskAssigned('task-assigned', count);
        changeTotalTasks('total-tasks', count);   
    }
    else{
        alert('Congrats!!! You have completed all the current tasks.')
        changeTaskAssigned('task-assigned', count);
        changeTotalTasks('total-tasks', count);  
    }    
    btn.setAttribute('disabled', 'true');
}

function changeTaskAssigned(id, count){
    document.getElementById(id).innerText = '0'+(6-count);
}

function changeTotalTasks(id, count){
    let total = parseInt(document.getElementById(id).innerText);
    total = total + count;
    document.getElementById(id).innerText = total;

}

function setDay(day){
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const today = new Date().getDay();
    document.getElementById(day).innerText = days[today]+',';      
}

function setFullDate(id){
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const today = new Date();
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    document.getElementById(id).innerText = month + ' ' + date + ' ' + year;
}