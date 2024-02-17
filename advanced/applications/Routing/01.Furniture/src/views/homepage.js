import { getAllFurniture } from "../data/data.js";
import { homePageTemplate } from "../templates.js";

export async function homePage(ctx) {
    const furniture = await getAllFurniture();
    ctx.render(homePageTemplate(furniture));
}