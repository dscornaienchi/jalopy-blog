document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchResultsContainer = document.getElementById('searchResults');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const yearValue = document.getElementById('year').value;
        const makeValue = document.getElementById('make').value;
        const modelValue = document.getElementById('model').value;

        const formData = new FormData(searchForm);
        const searchParams = new URLSearchParams(formData);

        try {
            const response = await fetch(`/search?${searchParams}`, {
                method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                updateSearchResults(data);
            } else {
                console.error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    });

    // Function to update the DOM with search results
    function updateSearchResults(cars) {
        searchResultsContainer.innerHTML = '';
        cars.forEach((car) => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.innerHTML = `<h2>${car.year} ${car.make} ${car.model}</h2>`;
            // Add other car details as needed
            searchResultsContainer.appendChild(carCard);
        });
    }
});

