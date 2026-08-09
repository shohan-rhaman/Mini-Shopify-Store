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


============================================================================================

# 🚀 Now let's build the first real e-commerce feature.

Sprint 2 – Feature 2: Cart Counter

We're going to build this:

Mini Shopify Store
🛒 Cart (0)

When the customer clicks: "Add to Cart" it should become: 🛒 Cart (1)

Click another product: 🛒 Cart (2)

Click another: 🛒 Cart (3)


============================================================================

# 🛒 Sprint 2 — Feature 3: Toggle Cart

🎯 Current Behavior

Click
Add to Cart
      ↓
Added ✓


Once clicked...
❌ It can never go back.


🎯 New Behavior

Click
Add to Cart
      ↓
Added ✓


Click again
Added ✓
      ↓
Add to Cart

Now the customer can remove the item from the cart.

What Should Happen?  First Click

Button:
Add to Cart

↓

Button:
Added ✓
Cart (1)


Second Click
Button:
Added ✓

↓

Button:
Add to Cart
Cart (0)


===============================================================================

# 🛒 Mini Shopify Store — Feature: Real Cart Data

So far we have:

Product List
      ↓
Add to Cart
      ↓
Cart (1)
Cart (2)
Cart (3)

But our cart currently only stores a number.

let cartCountValue = 0;

That's not enough for a real store.


🎯 New Goal

Create an actual cart array:

const cart = [];

When a customer clicks Add to Cart, the actual product object should go into the cart.

For example:

Initial state
cart = [];

Click Nike
cart = [
    {
        id: 1,
        name: "Nike Air Max",
        category: "Shoes",
        price: 120,
        stock: 10
    }
];


Click Adidas
cart = [
    Nike,
    Adidas
];


Click Nike again Nike should be removed:
cart = [
    Adidas
];


=====================================================================================
🧠 Remember this rule

For some():
If I'm checking whether something exists → use ===.
cart.some(item => item === selectedProduct)

For your removal with filter():
Keep everything except the selected item → use !==.
cart.filter(item => item !== selectedProduct)

So you now have:

some()   → "Does it exist?"
           ===

filter() → "Keep everything except it"
           !==


============================================================================================

# 🛒 Sprint 2 — Feature 4: Cart Items as Product Objects

Right now your cart contains only names:
let cart = [
    "Nike Air Max",
    "Adidas Hoodie"
];

That works for showing names, but a real cart needs more information. For example:

[
    {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        category: "Shoes",
        quantity: 1
    }
]

Now we can eventually calculate: Nike Air Max × 1 = $120

and later: Nike Air Max × 2 = $240