import { html } from "../node_modules/lit-html/lit-html.js"

export const layoutTemplate = (ctx, content) => html`
<header>
  <!-- Navigation -->
  <a id="logo" href="/" ><img id="logo-img" src="./images/logo.png" alt=""/></a>
  <nav>
    <div>
      <a href="/fruits">Fruits</a>
      <a href="/search">Search</a>
    </div>

    <!-- Logged-in users -->
    

    <!-- Guest users -->

    ${ctx.userData ?
        html`
    <div class="user">
      <a href="/addFruit">Add Fruit</a>
      <a href="/logout">Logout</a>
    </div>` :
        html`
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>`
    }
    
  </nav>
</header>
<main>${content}</main>`