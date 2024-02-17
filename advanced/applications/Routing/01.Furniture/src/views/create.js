import { createNewFurniture } from "../data/data.js";
import { createPageTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";


export async function showCreate(ctx) {
    ctx.render(createPageTemplate(createSubmitHandler(onCreate)));

    async function onCreate(furniture, form) {
        Object.values(furniture).forEach(el => {
            if (!el) {
                alert('All fields required');
                throw new Error('all fields required')
            }
        });
        await createNewFurniture(furniture);
        form.reset();
        ctx.page.redirect('/')
    }


}

