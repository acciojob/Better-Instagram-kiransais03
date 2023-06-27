//your code here
function allowDrop(even) {
  even.preventDefault();
}

function drag(even) {
  even.dataTransfer.setData("text", even.target.id);
}

function drop(even) {
  even.preventDefault();
  const fetchData = even.dataTransfer.getData("text");
  even.target.appendChild(document.getElementById(fetchData));
}