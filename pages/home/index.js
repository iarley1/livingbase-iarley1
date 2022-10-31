/* Desenvolva seu script aqui */
import { getPosts } from "../scripts/request.js";
import { observer } from "../scripts/observer.js";

const ul = document.querySelector('.list_post')

export async function render () {
     const posts = await getPosts()
     posts.forEach(element => {
         createCard(element)
     });

     const divObserver = document.createElement('div')
     divObserver.classList.add('observer')
     ul.appendChild(divObserver)

     observer.observe(divObserver)
} 

 export function createCard (post) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const button = document.createElement('button')


    img.src = post.image
    h3.innerText = post.title
    p.innerText = post.description
    button.innerText = "Acessar conteúdo"

    li.classList.add('card_post')
    img.classList.add('img_post')
    button.classList.add('open_post')
    
    
    button.addEventListener('click', () => {
        localStorage.setItem('idPost', post.id)
        window.location.replace("./pages/post/index.html")
    })

    li.append(img, h3, p, button)
    

    ul.appendChild(li)
}
render()


              
