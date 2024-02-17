import { getById } from "../data/data.js";
import { editTemplate } from "../templates.js";


export async function editPage(ctx) {
    const id = ctx.params.id
    const furniture = await getById(id);

    ctx.render(editTemplate(furniture));


}