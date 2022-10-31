/* Desenvolva seu script aqui */
import { getPostById } from "../scripts/request.js";


const button = document.querySelector('button')
button.addEventListener('click', () => {
    window.location.replace('../../index.html')
})

const ul = document.querySelector('ul')

async function render () {
    ul.innerHTML = ""
    const post = await getPostById(getLocalStorage())
    console.log(post.content)
    createCard(post)

}

render() 

function createCard (post) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const div = document.createElement('div')
    const div2 = document.createElement('div')

    img.src = post.image
    h2.innerText = post.title
    h3.innerText = post.description
    p.innerText = post.content


    li.classList.add('card_post')
    img.classList.add('img_post')
    div.classList.add('title_box')
    div2.classList.add('post')
    
    div.append(h2,h3)
    div2.append(img, p)
    li.append(div, div2)
    ul.appendChild(li)
}

function getLocalStorage () {
    return localStorage.getItem('idPost')
}


