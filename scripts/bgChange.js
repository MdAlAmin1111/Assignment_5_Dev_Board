// changing background
const backgroundColors = [
    "rgba(255, 87, 51, 0.2)",  // Red-Orange
    "rgba(51, 255, 87, 0.2)",  // Green
    "rgba(51, 87, 255, 0.2)",  // Blue
    "rgba(243, 255, 51, 0.2)", // Yellow
    "rgba(255, 51, 246, 0.2)", // Pink
    "rgba(51, 255, 246, 0.2)", // Cyan
    "rgba(168, 51, 255, 0.2)", // Purple
    "rgba(255, 140, 51, 0.2)", // Orange
    "rgba(51, 168, 255, 0.2)", // Light Blue
    "rgba(107, 255, 51, 0.2)"  // Lime Green
];
let colorSerial = 0;
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function(){
    if(colorSerial>9){
        colorSerial = 0;
    }
    document.getElementById('body').style.backgroundColor = backgroundColors[colorSerial];
    colorSerial++;
})