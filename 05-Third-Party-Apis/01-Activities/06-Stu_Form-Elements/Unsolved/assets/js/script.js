var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var itemEl = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
function handleFormSubmit(event) {
    event.preventDefault();

    // get item from form
    var shoppingItem = itemEl.val();

    // create li item
    var liEl = $('<li>');

    // add item to li
    liEl.text(shoppingItem);

    // append li to ul
    shoppingListEl.append(liEl);


}


// submit event on the form
shoppingFormEl.on('submit', handleFormSubmit);