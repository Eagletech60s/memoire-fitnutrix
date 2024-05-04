let composantCounter = 1;

document.getElementById('add-composant-btn').addEventListener('click', function() {
  // Increment the composant counter
  composantCounter++;

  // Update the text in the p tag to show "Composant + counter"
  document.getElementById('composant-counter').textContent = `Item ${composantCounter}`;

  // Create a new form composant
  let newComposantForm = document.createElement('div');
  newComposantForm.classList.add('formulair'); // Add class to style the new form

  // Composant name label
  let nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', `name-composant-${composantCounter}`);
  nameLabel.textContent = 'Name composant';
  newComposantForm.appendChild(nameLabel);

  // Composant name input field
  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', `name-composant-${composantCounter}`);
  nameInput.setAttribute('required', 'true');
  newComposantForm.appendChild(nameInput);

  // Quantite label
  let quantiteLabel = document.createElement('label');
  quantiteLabel.setAttribute('for', `quantite-${composantCounter}`);
  quantiteLabel.textContent = 'Quantite';
  newComposantForm.appendChild(quantiteLabel);

  // Quantite input field
  let quantiteInput = document.createElement('input');
  quantiteInput.setAttribute('type', 'number');
  quantiteInput.setAttribute('id', `quantite-${composantCounter}`);
  quantiteInput.setAttribute('name', 'quantite');
  quantiteInput.setAttribute('placeholder', 'Gram');
  newComposantForm.appendChild(quantiteInput);

  // Food category label
  let foodCategoryLabel = document.createElement('label');
  foodCategoryLabel.setAttribute('for', `foodCategory-${composantCounter}`);
  foodCategoryLabel.textContent = 'Select type';
  newComposantForm.appendChild(foodCategoryLabel);

  // Food category select element
  let foodCategorySelect = document.createElement('select');
  foodCategorySelect.setAttribute('id', `foodCategory-${composantCounter}`);
  newComposantForm.appendChild(foodCategorySelect);

  // Add options to food category select element
  let foodCategories = ['vegetables', 'fruits', 'grains', 'dairy', 'meat', 'seafood', 'snacks', 'desserts'];
  foodCategories.forEach(category => {
    let option = document.createElement('option');
    option.setAttribute('value', category);
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    foodCategorySelect.appendChild(option);
  });

  // Append the new form composant to the existing composant form
  document.getElementById('form-compos').appendChild(newComposantForm);
});