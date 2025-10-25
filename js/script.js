// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal (the 'X')
// We use [0] because getElementsByClassName returns a collection
var span = document.getElementsByClassName("close")[0];

// 1. When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// 2. When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// 3. When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
