const productList = document.querySelector("#product-list")
const cartCountElement = document.querySelector("#cart-count")
const cartitems = document.querySelector("#cart-items")

//let cartCountValue = 0;
let cart = [];


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

    // Selected product
    //const selectedProduct = product.name
    
    const isCart = cart.some(item =>{
        return item.id === product.id
    })



    // apply condition is the prodcut exist or not? true or false?
    if(!isCart){
        cart.push(product)
        event.target.textContent = "Added ✓"
        event.target.classList.add("added")
    }else{
        event.target.textContent = "Add to Cart"
        event.target.classList.remove("added")

        // remove cart item
        cart = cart.filter(item =>{
            return item.id !== product.id
        })
    }

    console.log(cart)


    /* if(event.target.textContent === "Add to Cart"){
        event.target.textContent = "Added ✓";
        event.target.classList.add("added");
        //cartCountValue++;

        // Real Cart Data
        cart.push(selectedProduct)
    }else{
        event.target.textContent = "Add to Cart"
        //cartCountValue--
        event.target.classList.remove("added")

        // Real Cart Data
        cart = cart.filter(item =>{
            return item !== selectedProduct
        })
    } */
    
    cartCountElement.textContent = `🛒 Cart (${cart.length})`
    cartitems.textContent = `Cart Items: [${cart.map(item => item.name).join(", ")}]`


    });



})

