

function openNote() {
  var format = document.getElementById("Format");
  if (format.style.display=="inline") {format.style.display="none"}
  else {format.style.display="inline"}

}

function font() {
  document.getElementById("text").style.fontFamily=document.getElementById("fontInput").value;
}

function fontSize() {
  document.getElementById("text").style.fontSize=document.getElementById("fontSizeInput").value + "px";
}

function color() {
  document.getElementById("text").style.color=document.getElementById("colorInput").value;
}
function backgroundColor() {
  document.getElementById("text").style.backgroundColor=document.getElementById("backgroundColorInput").value;
}

function reset() {
  document.getElementById("fontInput").value = "";
  document.getElementById("fontSizeInput").value = "";
  document.getElementById("colorInput").value = "";
  document.getElementById("backgroundColorInput").value = "";
}

//function autoGrow (oField) {
  //if (oField.scrollHeight > oField.clientHeight) {
 //   oField.style.height = oField.scrollHeight + "px";
  //  }


