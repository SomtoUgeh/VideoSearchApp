import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

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
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
