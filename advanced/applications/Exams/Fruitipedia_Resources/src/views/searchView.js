import { html } from "../../node_modules/lit-html/lit-html.js"
import { searchByQuery } from "../data/data.js"
import { createSubmitHandler } from "../util.js"



const searchLayout = (onSubmit, data) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form @submit="${onSubmit}" class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
        </form>
    </div>
<h4>Results:</h4>
<div class="search-result">
    ${data ? data.length == 0 ? html`<p class="no-result">No result.</p>` : data.map(searchedFruitTemplate) : null}
    <!--If there are matches display a div with information about every fruit-->
</div>
</section>`

const searchedFruitTemplate = (fruit) => html`
<div class="fruit">
    <img src="${fruit.imageUrl}" alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
</div>`

export function searchPage(ctx) {
    ctx.render(searchLayout(createSubmitHandler(onSearch)))

    async function onSearch({ search }) {
        if (!search) {
            return alert('Search field is required!')
        }
        const query = encodeURIComponent(`name LIKE "${search.trim()}"`)
        const data = await searchByQuery(query);
        ctx.render(searchLayout(createSubmitHandler(onSearch), data))
    }
}


