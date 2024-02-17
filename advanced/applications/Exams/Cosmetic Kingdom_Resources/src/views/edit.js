import { editById, getById } from "../data/data.js";
import { editTemplate } from "../templates.js";
import { createSubmitHandler } from "../util.js";


export async function editPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);

    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));


    async function onEdit(data) {
        Object.values(data).forEach(el => {
            if (!el) {
                alert('All fields required');
                throw new Error('all fields required')
            }
        });
        await editById(id, data);
        ctx.page.redirect('/products');
    }

}