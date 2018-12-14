import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import youtube from "./api/youtube";

class App extends Component {
	state = {
		videos: []
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

	render() {
		return (
			<div className="App ui container">
				<Searchbar getVideos={this.getVideos} />
			</div>
		);
	}
}

export default App;
