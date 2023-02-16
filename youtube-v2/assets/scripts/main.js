/* the following is for js-demo.html page */
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
  const text = document.createTextNode(document.getElementById("menuInput").value); 
  // put the text inside the li   <li>Home</li>
  li.appendChild(text); // <li>Home</li>

  // append the above li in parent element
  menuList.appendChild(li);
}

const skills = [
  {
    id: 1,
    topic: "HTML",
  },
  {
    id: 2,
    topic: "css",
  },
  {
    topic: 3,
    topic: "js",
  }
];

function handleAddSkill() {
  // TODO: implement the array map and use template literal to create multiple elements
  // then insert it in elemetn with id #skillList
}


// The following is for index.html page 
const videos = [
  {
    id: 52345235,
    title: "Football Highlights of 2022",
    videoThumbnailUrl:
      "https://via.placeholder.com/240x180/09f/fff?text=Football Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "https://via.placeholder.com/32/f00/fff?text=B",
    views: "1M",
    publishedDate: "2 weeks ago",
  },
  {
    id: 89679431,
    title: "Cricket Highlights of 2023",
    videoThumbnailUrl:
      "https://via.placeholder.com/240x180/09f/fff?text=Cricket Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "https://via.placeholder.com/32/f00/fff?text=Z",
    views: "2M",
    publishedDate: "5 weeks ago",
  },
];
