import React from "react";
import "./VideoItem.css";

const VideoList = ({ videos, onVideoSelect }) => {
	const videoList = videos.map(video => {
		return (
			<VideoItem
				video={video}
				onVideoSelect={onVideoSelect}
				key={video.id.videoId}
			/>
		);
	});

	return <div className="ui relaxed divided list">{videoList}</div>;
};

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="item video-item">
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoList;
