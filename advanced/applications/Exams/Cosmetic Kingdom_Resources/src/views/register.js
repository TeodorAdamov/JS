import { register } from "../data/auth.js";
import { registerPageTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";


export function registerPage(ctx) {
    ctx.render(registerPageTemplate(createSubmitHandler(onRegister)));

    async function onRegister(formData, form) {
        const email = formData['email'];
        const password = formData['password'];
        const rePass = formData['re-password'];
        await register(email, password, rePass)
        form.reset();
        ctx.page.redirect('/products')
        ctx.updateNav();
    }
}


