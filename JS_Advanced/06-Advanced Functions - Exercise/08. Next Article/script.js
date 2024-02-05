function getArticleGenerator(articles) {
    const divContainer = document.getElementById('content')
    let copyOfArticles = articles.slice(0)

    return function showNext () {
        if (copyOfArticles.length >=1){
            let newArticle = document.createElement('article')
            newArticle.innerHTML = copyOfArticles.shift()
            divContainer.appendChild(newArticle)
        }
        return showNext
    }

}
