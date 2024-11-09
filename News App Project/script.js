const API_KEY = "9bedc99f64814f8ba48b004b2181fd1a";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json()
    console.log(data)
    bindData(data)
}