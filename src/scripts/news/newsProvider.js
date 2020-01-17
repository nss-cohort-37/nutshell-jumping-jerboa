let news = [];

export const useNews = () => 
  news.slice().sort((a, b) => b.date - a.date);

export const getNews = () =>
  fetch(`http://localhost:8088/news?userId=${user}`)
    .then(res => res.json())
    .then(parsedNews => (news = parsedNews));

export const editNews = (newsObject) => {
  return fetch(`http://localhost:8088/news/${newsObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newsObject)
  }).then(getNews);
};

export const deleteNews = (newsId) => {
  return fetch(`http://localhost:8088/news/${newsId}`, {
    method: "DELETE"
  }).then(getNews);
};

export const saveNews = news => {
  return fetch("http://localhost:8088/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(news)
  }).then(getNews);
};
