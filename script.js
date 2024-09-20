const api = 'https://ecommerce-backend-kjw7.onrender.com/products'

async function getProductsData() {
    const result = await fetch(api);
    const data = await result.json();
    console.log(data);
    renderProducts(data);
}

getProductsData();

function renderProducts(data){
    const container = document.getElementById('card-container');
    console.log(container);
    data.map((product)=>{
        const card = document.createElement('div');
        const image = document.createElement('img');
        image.src = product.image;
        image.className = 'product-image';
        const details = document.createElement('div');
        details.className = 'product-details';
        const name = document.createElement('h3');
        name.innerText = product.name;
        const price = document.createElement('h4');
        price.innerText = product.price
        const button = document.createElement('button');
        button.innerText = 'Buy Now';
        card.appendChild(image); 
        details.appendChild(name); 
        details.appendChild(price);
        card.appendChild(details); 
        card.appendChild(button); 
        container.appendChild(card); 
    });
}

