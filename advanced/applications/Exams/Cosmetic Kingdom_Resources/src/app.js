import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { homePage } from "./views/homepage.js";
import { logout } from "./data/auth.js";
import { updateNav } from "./util.js";
import { productsPage } from "./views/products.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { boughtById, buyProduct } from "./data/data.js";




page(middleware)
page('/', homePage);
page('/products', productsPage);
page('/addProduct', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/products/:id', detailsPage);
page('/products/:id/edit', editPage);
page('/products/:id/buy', buyFunc);

updateNav();

const main = document.querySelector('main')
document.getElementById('logout-btn').addEventListener('click', logout);

page.start();

function middleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav;
    next();
}


async function buyFunc(ctx,) {
    const productId = ctx.params.id
    await buyProduct({ productId })
    ctx.page.redirect(`/products/${productId}`)
}


