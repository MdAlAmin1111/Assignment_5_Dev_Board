let count = 0;
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

function disable(btn, count){
    console.log(count);
    if(count<6){
        alert('Board Updated Successfully');   
    }
    else{
        alert('Congrats!!! You have completed all the current tasks.')
    }
    
    btn.setAttribute('disabled', 'true');
}