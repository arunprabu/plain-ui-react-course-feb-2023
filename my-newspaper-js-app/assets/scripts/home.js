function handleRedirect( url ) {
  // Let's redirect to the specific url
  console.log(url);
  window.location.href = `${url}.html`;
}

const nameInputWrapper = document.querySelector("#nameInputWrapper");
const editNameWrapper = document.querySelector("#editNameWrapper");

// attaching event thru JS
// finding an element with id saveBtn
const saveBtn = document.querySelector("#saveBtn");
console.log(saveBtn);
saveBtn.addEventListener('click', () => {
  // read the data from the input field
  let enteredName = document.querySelector("#nameInput").value;
  // set it in the html span element.
  document.querySelector(
    "#greetingText"
  ).textContent = `Hello, ${enteredName}!`;
  // TODO: // and hide the element with an id nameInputWrapper
  nameInputWrapper.style.display = "none";
  // TODO: and hide the element with an id editNameWrapper
  editNameWrapper.style.display = "block";
});

// changing name
document.querySelector('#changeNameBtn').addEventListener('click', () => {
  nameInputWrapper.style.display = 'flex';
  editNameWrapper.style.display = "none";
});



