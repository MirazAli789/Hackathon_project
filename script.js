async function fetchWaterFootprints() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching water footprint data:', error);
        return {};
    }
}

async function searchProduct() {
    const product = document.getElementById('productInput').value.toLowerCase();
    const waterFootprints = await fetchWaterFootprints();
    const resultBox = document.getElementById('result');
    const footprint = waterFootprints[product];

    // Construct the result message
    const result = footprint 
        ? `Water Footprint of ${product.charAt(0).toUpperCase() + product.slice(1)}: ${footprint}`
        : 'Product not found';

    // Initially hide the result box
    resultBox.style.opacity = 0;
    resultBox.innerText = result;
    
    // Force a reflow to restart the animation
    void resultBox.offsetWidth; 

    // Apply the animation
    resultBox.style.animation = 'fadeInBounce 1s ease-in-out forwards';
    resultBox.style.opacity = 1;
}

// Add event listener for the search button
document.getElementById('searchButton').addEventListener('click', searchProduct);

// Optional: Allow pressing Enter to trigger the search
document.getElementById('productInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchProduct();
    }
});
