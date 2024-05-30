document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Samsung Galaxy S21',
            price: '₹69,999',
            img: 'https://via.placeholder.com/200x200?text=Samsung+Galaxy+S21',
            specs: [
                'Display: 6.2-inch, 120Hz',
                'Processor: Exynos 2100',
                'RAM: 8GB',
                'Storage: 128GB',
                'Battery: 4000mAh',
                'Camera: 12MP + 64MP + 12MP'
            ]
        },
        {
            name: 'iPhone 13',
            price: '₹79,900',
            img: 'https://via.placeholder.com/200x200?text=iPhone+13',
            specs: [
                'Display: 6.1-inch, Super Retina XDR',
                'Processor: A15 Bionic',
                'RAM: 4GB',
                'Storage: 128GB',
                'Battery: 3240mAh',
                'Camera: 12MP + 12MP'
            ]
        },
        {
            name: 'iPhone 14',
            price: '₹89,900',
            img: 'https://via.placeholder.com/200x200?text=iPhone+14',
            specs: [
                'Display: 6.1-inch, Super Retina XDR',
                'Processor: A15 Bionic',
                'RAM: 6GB',
                'Storage: 128GB',
                'Battery: 3279mAh',
                'Camera: 12MP + 12MP'
            ]
        },
        {
            name: 'Redmi 12',
            price: '₹11,999',
            img: 'https://via.placeholder.com/200x200?text=Redmi+12',
            specs: [
                'Display: 6.5-inch, 90Hz',
                'Processor: MediaTek Helio G88',
                'RAM: 4GB',
                'Storage: 64GB',
                'Battery: 5000mAh',
                'Camera: 50MP + 8MP + 2MP'
            ]
        },
        // Add more product objects here...
    ];

    // Generate 100 products by duplicating the initial set
    while (products.length < 100) {
        products.push(...products.slice(0, 4));
    }

    const productContainer = document.getElementById('product-list');

    const renderProducts = (productList) => {
        productContainer.innerHTML = '';
        productList.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            const imgElement = document.createElement('img');
            imgElement.src = product.img;
            imgElement.alt = product.name;

            const titleElement = document.createElement('h3');
            titleElement.textContent = product.name;

            const priceElement = document.createElement('p');
            priceElement.textContent = `Price: ${product.price}`;

            const specsElement = document.createElement('ul');
            product.specs.forEach(spec => {
                const specElement = document.createElement('li');
                specElement.textContent = spec;
                specsElement.appendChild(specElement);
            });

            productElement.appendChild(imgElement);
            productElement.appendChild(titleElement);
            productElement.appendChild(priceElement);
            productElement.appendChild(specsElement);

            productContainer.appendChild(productElement);
        });
    };

    // Initial render
    renderProducts(products);

    // Add search functionality
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });
});
