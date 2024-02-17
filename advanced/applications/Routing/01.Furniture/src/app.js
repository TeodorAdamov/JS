import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { loginPage } from "./views/login.js";
import { homePage } from "./views/homepage.js";
import { showCreate } from "./views/create.js";
import { showRegister } from "./views/register.js";
import { logout } from "./data/auth.js";
import { updateNav } from "./util.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myPublicationsPage } from "./views/myPublications.js";

page(middleware)
page('/', '/dashboard');
page('/dashboard', homePage);
page('/create', showCreate);
page('/login', loginPage);
page('/register', showRegister);
page('/dashboard/:id', detailsPage);
page('/dashboard/:id/edit' , editPage);
page('/my-furniture', myPublicationsPage);

document.getElementById('logoutBtn').addEventListener('click', logout);
updateNav();

const container = document.querySelector('.container')


page.start();

function middleware(ctx, next) {
    ctx.render = (content) => render(content, container);
    ctx.updateNav = updateNav;
    next();
}
