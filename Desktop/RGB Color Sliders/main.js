document.getElementById('red').addEventListener('input',color);
document.getElementById('green').addEventListener('input',color);
document.getElementById('blue').addEventListener('input',color);
  function color(){
    var red=document.getElementById('red').value;
    var green=document.getElementById('green').value;
    var blue=document.getElementById('blue').value;
    var color= `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor=color;
    document.getElementById('box').value=color;
  }
