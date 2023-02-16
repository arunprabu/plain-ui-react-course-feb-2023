function handleStylize() {
  // DOM querying and manipulation
  const myDiv = document.getElementById("myDiv1");

  // adding inline styles
  myDiv.style.backgroundColor = "yellow";
  myDiv.style.color = "red";
  myDiv.style.border = "solid 5px green";
  myDiv.style.padding = "20px";
}

// adding li element inside ul 
function handleAddElement() {
  // find the parent element that should host the li
  const menuList = document.getElementById("menuList");

  // create the li element <li></li>
  const li = document.createElement("li"); // <li></li>
  // create the text content that should later be part of the li 'Home'
  const text = document.createTextNode("Home"); // Home
  // put the text inside the li   <li>Home</li>
  li.appendChild(text); // <li>Home</li>

  // append the above li in parent element
  menuList.appendChild(li);
}