import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	getVideos = term => {
		youtube
			.get("/search", {
				params: {
					q: term
				}
			})
			.then(res => {
				this.setState({
					videos: res.data.items
				});
			});
	};

	onVideoSelect = video => {
		this.setState({
			selectedVideo: video
		});
	};

	render() {
		return (
			<div className="App ui container">
				<Searchbar getVideos={this.getVideos} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
}

export default App;
