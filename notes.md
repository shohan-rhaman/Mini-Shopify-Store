🛍 Sprint 1 — Feature 1: Render Product Cards
🎯 Goal

Render all products from data.js into the page.

By the end, your page should look something like this:

---------------------------------
Nike Air Max
Shoes
$120
Stock: 10
[Add to Cart]

Adidas Hoodie
Clothing
$80
Stock: 5
[Add to Cart]
---------------------------------


📝 Requirements

For each product, create these elements dynamically:

<div class="product-card">

    <h2>Product Name</h2>

    <p>Category</p>

    <p>Price</p>

    <p>Stock</p>

    <button>Add to Cart</button>

</div>


📌 Rules

You must use:

✅ forEach()
✅ querySelector()
✅ createElement()
✅ textContent
✅ classList
✅ appendChild()

Do NOT use:

❌ innerHTML
❌ Template literals for generating HTML
❌ Google


================================================================================================

# 🛒 Sprint 2 – Feature 1: Add to Cart (UI Only)

🎯 Goal

When the user clicks Add to Cart:

Before
[ Add to Cart ]

After
[ Added ✓ ]

The button should also become green.

Requirements

When the button is clicked:

Change text to:
Added ✓

Add a CSS class:
.added{
    background:green;
}

Disable the button
button.disabled = true;

The customer shouldn't be able to click it again.

Example
Before Click

<button>
    Add to Cart
</button>

After Click
<button class="added" disabled>
    Added ✓
</button>

Concepts You'll Use
✅ querySelectorAll()
✅ forEach()
✅ addEventListener()
✅ event.target
✅ textContent
✅ classList.add()
✅ disabled