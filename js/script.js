// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update the subtotal text to the total value of the data-price
  function updateSubtotal() {
    var total = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseFloat(checkboxes[i].getAttribute('data-price'));
      }
    }
    subtotalText.textContent = 'Subtotal: $' + total.toFixed(2);
  }

  // Get the necessary elements
  var nameInput = document.getElementById('name');
  var checkboxes = document.getElementsByClassName('checkbox');
  var subtotalText = document.getElementById('subtotal');
  var outputContainer = document.getElementById('output-container');

  // Save the name of the sub
  nameInput.addEventListener('input', function() {
    var subName = nameInput.value;
    saveSubName(subName);
  });

  // Save the selected checkboxes
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
      saveSelectedToppings();
    });
  }

  // Save the sub name to the output container
  function saveSubName(subName) {
    var nameHeader = document.createElement('h3');
    nameHeader.textContent = subName;
    outputContainer.innerHTML = ''; // Clear previous content
    outputContainer.appendChild(nameHeader);
  }

  // Save the selected toppings to the output container
  function saveSelectedToppings() {
    var selectedToppings = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedToppings.push(checkboxes[i].nextElementSibling.textContent);
      }
    }
    var toppingsText = document.createElement('p');
    toppingsText.textContent = 'Selected Toppings: ' + selectedToppings.join(', ');
    outputContainer.appendChild(toppingsText);

    // Update the subtotal
    updateSubtotal();
  }
});