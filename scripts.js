const lamp = document.getElementById ("lamp");
const buttonOn = document.getElementById ("buttonOn");
const buttonOff = document.getElementById ("buttonOff");

function lampBroken() {
  lamp.src = "./image/quebrada.jpg";
}

function isLampBroken() {
  return lamp.src.indexOf ("quebrada") > -1
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./image/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./image/desligada.jpg";
  }
}

buttonOn.addEventListener ("click", lampOn);
buttonOff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampBroken);