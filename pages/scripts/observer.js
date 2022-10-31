import { createCard } from "../home/index.js";
import { getPostsPages } from "./request.js"

let cont = 1

export async function renderNewCards() {
    const pages = await getPostsPages(cont)
    console.log(pages)

    if(pages.nextPage && pages.nextPage != 4) {
        pages.news.forEach(element => {
            createCard(element)
        });
        cont++
    }
    
}

const observer = new IntersectionObserver((entries) => {
    if(entries.some((entry) => entry.isIntersecting)) {
        renderNewCards()
    }
})

export {observer}