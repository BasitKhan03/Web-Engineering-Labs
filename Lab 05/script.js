// ----------| Task 01 |----------

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  }

  else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// ----------| Task 02 |----------

function volume_sphere() {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(3);
  document.getElementById('volume').value = volume;
  return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// ----------| Task 03 |----------

function generateTable() {
  var table = '';
  var number = parseInt(prompt('Enter a Number to Generate Table:'));
  let range = parseInt(prompt('Enter Range of Table:'));
  for (let i = 1; i <= range; i++) {
    const final = i * number;
    table += `${number} x ${("" + i).slice(-2)} = ${("" + final).slice(-2)}` + '\n';
  }
  alert(table);
}

function calculatePower() {
  var power = '';
  var base = parseInt(prompt('Enter the Value of Base:'));
  var exponent = parseInt(prompt('Enter the Value of Exponent:'));
  let final = Math.pow(base, exponent);
  power += `${base} ^ ${(exponent)} = ${(final)}`;
  alert(power);
}

function generateSequence() {
  let sequence = '{ ';
  var limit = parseInt(prompt('Enter Limit of Sequence:'));
  for (let i = 0; i <= limit; i++) {
    if (i == limit) {
      sequence += `${(i)} `;
    }
    else {
      sequence += `${(i)} , `;
    }
  }
  sequence += '}'
  alert(sequence);
}

function generateEvenOdd() {
  let sequence;
  let opt = prompt('Enter "O" for Odd or "E" for Even Sequence:');
  let range = parseInt(prompt('Enter Range of Sequence:'));
  if (opt.toLowerCase() === 'o') {
    sequence = '{ '
    for (let i = 1; i <= range; i += 2) {
      if (i == range || i == range - 1) {
        sequence += `${(i)} `;
      }
      else {
        sequence += `${(i)} , `;
      }
    }
    sequence += '}'
  }
  else if (opt.toLowerCase() === 'e') {
    sequence = '{ '
    for (let i = 0; i <= range; i += 2) {
      if (i == range || i == range - 1) {
        sequence += `${(i)} `;
      }
      else {
        sequence += `${(i)} , `;
      }
    }
    sequence += '}'
  }
  else {
    sequence = 'Invalid Input'
  }
  alert(sequence);
}

document.getElementById('table').onclick = generateTable;
document.getElementById('power').onclick = calculatePower;
document.getElementById('sequence').onclick = generateSequence;
document.getElementById('evenOdd').onclick = generateEvenOdd;

// ----------| Task 04 |----------

function red(){ document.getElementById('task4').style.background = "rgb(255, 102, 99)"; }
function orange(){ document.getElementById('task4').style.background = "rgb(254, 177, 68)"; }
function yellow(){ document.getElementById('task4').style.background = "rgb(253, 253, 151)"; }
function green(){ document.getElementById('task4').style.background = "rgb(158, 224, 158)"; }
function blue(){ document.getElementById('task4').style.background = "rgb(128, 205, 235)"; }
function indigo(){ document.getElementById('task4').style.background = "rgb(204, 153, 201)"; }
function violet(){ document.getElementById('task4').style.background = "rgb(253, 196, 253)"; }
function blank(){ document.getElementById('task4').style.background = "white"; }
