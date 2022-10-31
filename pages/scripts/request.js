export  function getPosts () {
    const  posts = fetch('https://m2-api-living.herokuapp.com/news?page=0', {
       method: "GET",
       headers: {
           "Content-Type": "application/json",
       }
   })
   .then(  (res) => {
       return res.json()
   })
   .then( (res) => {
       return res.news
   })
   return posts 
}

export  function getPostsPages (page) {
    const  posts = fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`, {
       method: "GET",
       headers: {
           "Content-Type": "application/json",
       }
   })
   .then(  (res) => {
       return res.json()
   })
   .then( (res) => {
       return res
   })
   return posts
}

export function getPostById (id) {
    const  posts = fetch(`https://m2-api-living.herokuapp.com/news/${id}`, {
       method: "GET",
       headers: {
           "Content-Type": "application/json",
       }
   })
   .then(  (res) => {
       return res.json()
   })
   .then( (res) => {
       return res 
   })
   return posts 
}