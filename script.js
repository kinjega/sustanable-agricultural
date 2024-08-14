// A dictionary containing information about different vegetables
const vegetableInfo = {
    "carrot": {
        nutrients: ["Vitamin A", "Vitamin K", "Potassium", "Fiber"],
        growingGuide: "Carrots prefer full sun and well-drained, loose soil. They should be sown directly in the garden, and thinning should be done to allow space for roots to develop.",
        naturalManure: "Composted leaves, well-rotted manure, or organic compost.",
        growingTime: "70 to 80 days"
    },
    "tomato": {
        nutrients: ["Vitamin C", "Vitamin K", "Potassium", "Folate"],
        growingGuide: "Tomatoes need full sun and warm temperatures. Start seeds indoors 6-8 weeks before the last frost date, and transplant them outdoors after the frost has passed.",
        naturalManure: "Composted manure, fish emulsion, or seaweed extract.",
        growingTime: "60 to 100 days depending on the variety"
    },
    "spinach": {
        nutrients: ["Iron", "Calcium", "Magnesium", "Vitamin A", "Vitamin C"],
        growingGuide: "Spinach thrives in cool weather. Sow seeds directly in the garden in early spring or fall. Ensure soil is rich in organic matter and well-drained.",
        naturalManure: "Composted manure, organic compost, or fish emulsion.",
        growingTime: "40 to 50 days"
    },
    // Add more vegetables here as needed
};

function getVegetableInfo() {
    const input = document.getElementById('vegetable-input').value.toLowerCase();
    const info = vegetableInfo[input];

    if (info) {
        document.getElementById('nutrients').textContent = `Nutrients: ${info.nutrients.join(', ')}`;
        document.getElementById('growing-guide').textContent = `How to Grow: ${info.growingGuide}`;
        document.getElementById('natural-manure').textContent = `Recommended Natural Manure: ${info.naturalManure}`;
        document.getElementById('growing-time').textContent = `Time to Grow: ${info.growingTime}`;
    } else {
        document.getElementById('nutrients').textContent = '';
        document.getElementById('growing-guide').textContent = 'Sorry, information about this vegetable is not available.';
        document.getElementById('natural-manure').textContent = '';
        document.getElementById('growing-time').textContent = '';
    }
}
