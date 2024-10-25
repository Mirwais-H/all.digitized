const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });


// Example product list (In a real scenario, fetch this data from the server)
const products = [
  { name: 'Digital Art Bundle', id: 1 },
  { name: 'E-Book Collection', id: 2 },
  { name: 'Coding Bootcamp', id: 3 },
  { name: 'Photography Presets', id: 4 },
  { name: 'Login Page', id: products }
];

// Function to filter and display results based on search input
function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('results');

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Filter products by search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm)
  );

  // Display matching products
  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      const resultItem = document.createElement('div');
      resultItem.textContent = product.name;
      resultItem.classList.add('result-item');
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}


 
