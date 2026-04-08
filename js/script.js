function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

function popupAlert(){
  var text = document.getElementById('entryinput');
  document.getElementById("textoutput").innerHTML = textbox.value;
  alert("Zainab Azeem: " + textbox.value);
  } 

button.addEventListener('click', popupAlert);
}

window.addEventListener('load', init);