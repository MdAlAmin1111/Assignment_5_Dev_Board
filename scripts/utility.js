
// common functions
function disable(btn, count) {
    if (count < 6) {

        alert('Board Updated Successfully');
        changeTaskAssigned('task-assigned', count);
        changeTotalTasks('total-tasks');
    }
    else {
        alert('Congrats!!! You have completed all the current tasks.')
        changeTaskAssigned('task-assigned', count);
        changeTotalTasks('total-tasks');
    }
    btn.setAttribute('disabled', 'true');
}

function changeTaskAssigned(id, count) {
    document.getElementById(id).innerText = '0' + (6 - count);
}

function changeTotalTasks(id) {
    let total = parseInt(document.getElementById(id).innerText);
    total++;
    document.getElementById(id).innerText = total;

}

function setDay(day) {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const today = new Date().getDay();
    document.getElementById(day).innerText = days[today] + ',';
}

function setFullDate(id) {
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

function addToActivity(id) {
    const d = new Date();
    let text = d.toLocaleTimeString();
    const title = document.getElementById(id).innerText;
    const activityContainer = document.getElementById('activity-container');
    const child = document.createElement('p');
    child.innerText = `You have completed the task ${title} at ${text}`;
    child.classList.add("bg-[#F4F7FF]", "rounded-lg", "p-2", "mb-6");
    activityContainer.appendChild(child);
}