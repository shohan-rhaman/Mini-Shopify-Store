const productList = document.querySelector("#product-list")
const cartCountElement = document.querySelector("#cart-count")

let cartCountValue = 0;


products.forEach(product =>{
    
    // Create Elements
    const productCard = document.createElement("div")
    const productTitle = document.createElement("h2")
    const productCategory = document.createElement("p")
    const productPrice = document.createElement("p")
    const productStock = document.createElement("p")
    const addToCartButton = document.createElement("button")


    // Configure Elements
    productCard.classList.add("product-card");
    productTitle.textContent = product.name
    productCategory.textContent = product.category
    productPrice.textContent = `$${product.price}`
    productStock.textContent = `Stock: ${product.stock}`
    addToCartButton.textContent = "Add to Cart"

    // Built DOM
    productCard.appendChild(productTitle)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrice)
    productCard.appendChild(productStock)
    productCard.appendChild(addToCartButton)


    // Render
    productList.appendChild(productCard)

    
    // Add to Cart (UI Only)
    addToCartButton.addEventListener("click", (event) => {

    if(event.target.textContent === "Add to Cart"){
        event.target.textContent = "Added ✓";
        event.target.classList.add("added");
        cartCountValue++;
    }else{
        event.target.textContent = "Add to Cart"
        cartCountValue--
        event.target.classList.remove("added")
    }
    
    cartCountElement.textContent = `🛒 Cart (${cartCountValue})`

    });


})

