document.addEventListener("DOMContentLoaded", () => {
    // Get all category items
    const categoryItems = document.querySelectorAll('.category_item');

    // Get all product items
    const productItems = document.querySelectorAll('.product-item');

    // Function to filter products based on category
    const filterProducts = (category) => {
        productItems.forEach((item) => {
            if (item.getAttribute('category') === category || category === 'ALL') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Add click event listener to each category item
    categoryItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all category items
            categoryItems.forEach((item) => item.classList.remove('active'));

            // Add active class to the clicked category item
            item.classList.add('active');

            // Get the category from the clicked item
            const category = item.getAttribute('category');

            // Filter products
            filterProducts(category);
        });
    });

    // Initially display all products
    filterProducts('ALL');
});

