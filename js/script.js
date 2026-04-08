function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

function popupAlert(){
  var textbox = document.getElementById('entryinput');
  alert("Zainab Azeem: " + textbox.value);
  document.getElementById('textoutput').innerHTML = textbox.value;
  } 

button.addEventListener('click', popupAlert);
}

window.addEventListener('load', init);