import axios from "axios";

const newstoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";

async function getStoriesIds() {
    const result = await axios.get(newstoriesUrl).then(({ data }) => data);
    return result;
}

export default { getStoriesIds };