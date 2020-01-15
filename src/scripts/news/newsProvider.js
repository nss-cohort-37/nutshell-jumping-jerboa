
let news = []

export const useNews = () => news.slice()

export const getNews = () => fetch("http://localhost:8088/news")
    .then(res => res.json())
    .then(parsedNews => news = parsedNews)