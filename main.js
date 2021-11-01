var mouseEvent = "empty";
var canvas = document.getElementById('myCanvas');
var last_position_of_x, last_position_of_y;

ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

//Mouse Down
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    mouseEvent= "mousedown";
}
//End of Mouse Down
//Mouse Leave
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent= "mouseleave";
}
//End of Mouse Leave
//Mouse Up
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent= "mouseup";
}
//End of Mouse Up
//Mouse Move 
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = "+ last_position_of_x + " " + "y = "+ last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x ="+ current_position_of_mouse_x + " " + "y = "+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
//End of Mouse Move

