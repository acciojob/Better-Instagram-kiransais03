function allowDrop(even) {
  even.preventDefault();
}

function drag(even) {
  even.dataTransfer.setData("text", even.target.id);
}

function drop(even) {
  even.preventDefault();
  const fetchDataId = even.dataTransfer.getData("text");
  let dragelem = document.getElementById(fetchDataId);
  let dropelem = document.getElementById(even.target.id);
  //swapping id's
  let tempcurrId=even.target.id;
  dropelem.id=dragelem.id;
  dragelem.id=tempcurrId;
 
  //swapping innerText
  let temptext=dropelem.innerText;
  dropelem.innerText=dragelem.innerText;
  dragelem.innerText=temptext;
  
}