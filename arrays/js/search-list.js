const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search ) {
    message = `<strong>In Stock:</strong> ${inStock.join(', ')}`
} else if (inStock.includes(search.toLocaleLowerCase())) {
    message = `Yes, we have <strong>${search}</strong>.
            Its the ${inStock.indexOf(search.toLowerCase())+1}° element on the list`;
} else {
    message = `Sorry we do not have <strong>${search}</strong>!`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

