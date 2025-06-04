
import { articleContent } from '/articles.js'

const viewMoreBtn = document.getElementById('view-more-link');
const moreArticles = document.getElementsByClassName('add-more');
const main = document.querySelector('main')


main.addEventListener('click', e => {
    const target = e.target.closest('[id]')
    if (target && target.id){
        const article = articleContent.find(a => a.id === target.id)
        main.innerHTML = article.content;
    }

})


const articles = []
for (let i = 0; i < moreArticles.length; i++) {
    let article = moreArticles[i];
    articles.push(article)
}

if (viewMoreBtn){
    viewMoreBtn.addEventListener('click', () => {

        articles.map(article => article.classList.toggle('hide'));
        
    })
}
