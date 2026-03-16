import React, { useState } from "react";
import "./Upload.css";

function Upload() {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const uploadVideo = () => {
    if (!title || !video || !thumbnail || !category) {
      setMessage("Please fill all fields");
      return;
    }

    const newVideo = {
      id: Date.now(),
      title: title,
      category: category,
      videoName: video.name,
      thumbnailName: thumbnail.name
    };

    let videos = JSON.parse(localStorage.getItem("videos")) || [];
    videos.push(newVideo);
    localStorage.setItem("videos", JSON.stringify(videos));

    setTitle("");
    setVideo(null);
    setThumbnail(null);
    setCategory("");
    setMessage("Video uploaded successfully!");
  };

  return (
  

    <div className="upload-page">
         <div className="upload-wrapper">
      <div className="upload-skill-box">
        <h2>Upload Skill Video</h2>

        <div className="form-group">
          <label>Skill Title</label>
          <input
            type="text"
            placeholder="Enter skill title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <small>{video ? video.name : "No video selected"}</small>
        </div>

        <div className="form-group">
          <label>Upload Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <small>{thumbnail ? thumbnail.name : "No thumbnail selected"}</small>
        </div>

        <button className="upload-btn" onClick={uploadVideo}>
          Upload
        </button>

        {message && <p className="upload-message">{message}</p>}
      </div>
    </div>
    </div>
  );
}

export default Upload;