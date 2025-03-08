let count = 0;
setDay('day');
setFullDate('full-date');

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', function () {
    count++;
    disable(btn1, count);
    addToActivity('title1');

});

const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', function () {
    count++;
    disable(btn2, count);
    addToActivity('title2');
});

const btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', function () {
    count++;
    disable(btn3, count);
    addToActivity('title3');
});

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', function () {
    count++;
    disable(btn4, count);
    addToActivity('title4');
});

const btn5 = document.getElementById('btn-5');
btn5.addEventListener('click', function () {
    count++;
    disable(btn5, count);
    addToActivity('title5');
});

const btn6 = document.getElementById('btn-6');
btn6.addEventListener('click', function () {
    count++;
    disable(btn6, count);
    addToActivity('title6');
});