import { homePageTemplate } from "../templates.js";

export async function homePage(ctx) {
    ctx.render(homePageTemplate());
}