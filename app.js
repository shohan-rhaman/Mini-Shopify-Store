const productList = document.querySelector("#product-list")

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

})