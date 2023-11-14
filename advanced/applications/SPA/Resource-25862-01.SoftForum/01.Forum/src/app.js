import { showComments } from "./comments.js";
import { loadTopics, showHome } from "./home.js";

document.querySelector('nav a').addEventListener('click', showHome);
await loadTopics()
localStorage.clear();
document.querySelector('.topic-title').addEventListener('click', showComments);