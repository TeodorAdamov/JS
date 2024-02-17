import { register } from "../data/auth.js";
import { registerPageTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";


export function showRegister(ctx) {
    ctx.render(registerPageTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, rePass }, form) {
        await register(email, password, rePass)
        form.reset();
        ctx.page.redirect('/')
        ctx.updateNav();
    }
}


