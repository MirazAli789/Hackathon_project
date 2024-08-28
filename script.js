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
    const result = waterFootprints[product] ? `Water Footprint: ${waterFootprints[product]}` : 'Product not found';


    resultBox.style.opacity = 0;
    resultBox.innerText = result;
    

    void resultBox.offsetWidth;

    resultBox.style.animation = 'fadeInBounce 1s ease-in-out forwards';
    resultBox.style.opacity = 1;
}


