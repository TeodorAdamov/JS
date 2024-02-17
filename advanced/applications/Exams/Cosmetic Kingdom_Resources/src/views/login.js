import { login } from "../data/auth.js";
import { loginPageTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";



export function loginPage(ctx) {
    ctx.render(loginPageTemplate(createSubmitHandler(onLogin)));
    

    async function onLogin({ email, password }, form) {
        await login(email, password)
        form.reset();
        ctx.page.redirect('/products')
        ctx.updateNav();
    }
}



