import { delById, getById } from "../data/data.js";
import { detailsPageTemplate } from "../templates.js";
import { getUserData } from "../util.js";

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const furniture = await getById(id);
    const userData = getUserData();
    if (userData) {
        furniture.canEdit = userData._id == furniture._ownerId
    }
    ctx.render(detailsPageTemplate(furniture, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item');
        if (choice) {
            await delById(id);
            ctx.page.redirect('/dashboard');
        }
    }
}