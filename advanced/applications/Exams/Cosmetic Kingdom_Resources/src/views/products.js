import { getAllProducts } from "../data/data.js";
import { productsTemplate } from "../templates.js";

export async function productsPage(ctx) {
    const products = await getAllProducts();
    ctx.render(productsTemplate(products));
}