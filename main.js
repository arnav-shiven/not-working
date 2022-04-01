var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
MouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
var width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color_input").value;
    width_of_line=document.getElementById("width_input").value;
    MouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    MouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    MouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y=e.clientY - canvas.offsetTop;
  if(MouseEvent=="mouseDown"){
ctx.beginPath();
ctx.stokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("last position of x and y coordinates=");
console.log("X="+last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("last position of x and y coordinates=");
console.log("X="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
  }
  last_position_of_x=current_position_of_mouse_x;
  last_position_of_y=current_position_of_mouse_y;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}