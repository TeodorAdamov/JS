import { boughtById, delById, getById, userBuys } from "../data/data.js";
import { detailsPageTemplate } from "../templates.js";
import { getUserData } from "../util.js";

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const data = await getById(id);
    const userData = getUserData();
    const isBought = await userBuys(id, userData._id);
    const totalBuys = await boughtById(id);
    if (userData) {
        data.canEdit = userData._id == data._ownerId;
        data.canBeBought = userData._id !== data._ownerId;

    }
    if (isBought) {
        data.userBought = true;
    } else {
        data.userBought = false;
    }
    ctx.render(detailsPageTemplate(data, onDelete, totalBuys));
    

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item');
        if (choice) {
            await delById(id);
            ctx.page.redirect('/products');
        }
    }
}