const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // e stands for event
  // check if they had the shift key down
  // AND check that they are checking the box
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
