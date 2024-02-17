import { html } from "../node_modules/lit-html/lit-html.js"




export const homePageTemplate = () => html`
<section id="home">
    <img src="./images/beauty-g0d19af267_1920-removebg.png" alt="home" />
    <h2>Looking for the best beauty products?</h2>
    <h3>You are in the right place!</h3>
</section>`


export const productsTemplate = (data) => {
    if (data.length > 0) {
        return html`
        <h2>Products</h2>
        <section id="dashboard">
            <!-- Display a div with information about every post (if any)-->
            ${data.map(createProductTemplate)}  
            
        </section>
    `
    } else {
        return html`
        <h2>Products</h2>
        <h2>No products yet.</h2>`
    }
}


const createProductTemplate = (data) => html`
<div class="product">
    <img src="${data.imageUrl}" alt="example1" />
    <p class="title">${data.name}</p>
    <p><strong>Price:</strong><span class="price">${data.price}</span>$</p>
    <a class="details-btn" href="/products/${data._id}">Details</a>
</div>`

export const createPageTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="name" id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>`


export const detailsPageTemplate = (data, onDelete, buyCount) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="./images/product example 1.png" alt="example1" />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${data.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Bought: <span id="buys">${buyCount}</span> times.</h4>
                <span>${data.description}</span>
            </div>
        </div>

        <!--Edit and Delete are only for creator-->
        ${data.canEdit ? html`
        <div id="action-buttons">
            <a href="/products/${data._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href=javascript:void(0) id="delete-btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
        </div>` : data.canBeBought && data.userBought == false ? html`
        <div id="action-buttons">
            <a href="/products/${data._id}/buy" id="buy-btn">Buy</a>` : null}
        </div>
    </div>
</section>`


export const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Product Name" value="${data.name}" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" value="${data.imageUrl}" />
            <input type="text" name="category" id="product-category" placeholder="Category" value="${data.category}" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50">${data.description}</textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" value="${data.price}" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`

export const loginPageTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="#">Create an account</a>
            </p>
        </form>
    </div>
</section>`

export const registerPageTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>`