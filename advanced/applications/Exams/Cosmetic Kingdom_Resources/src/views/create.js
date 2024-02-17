import { createNewProduct } from "../data/data.js";
import { createPageTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";


export async function createPage(ctx) {
    ctx.render(createPageTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form) {
        Object.values(data).forEach(el => {
            if (!el) {
                alert('All fields required');
                throw new Error('all fields required')
            }
        });
        await createNewProduct(data);
        form.reset();
        ctx.page.redirect('/products');
    }
}

