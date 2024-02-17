import { getMyFurniture } from "../data/data.js";
import { myPublicationsTemplate } from "../templates.js";
import { getUserData } from "../util.js";

export async function myPublicationsPage(ctx) {
    const userData = getUserData()
    console.log(userData._id);
    debugger
    const furniture = await getMyFurniture(userData._id);
    if (furniture) {
        ctx.render(myPublicationsTemplate(furniture));
    } else {
        ctx.render(myPublicationsTemplate([]));
    }
}