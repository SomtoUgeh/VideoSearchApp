import axios from "axios";

const KEY = "AIzaSyCY2iLuGT5gDquQ1mqp20h6IUXwF2DYWDc";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
        maxResults: 5,
        key: KEY
	}
});
