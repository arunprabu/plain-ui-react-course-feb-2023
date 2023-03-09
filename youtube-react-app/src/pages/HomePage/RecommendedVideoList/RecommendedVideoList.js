import { Component } from "react";

class RecommendedVideoList extends Component {
  constructor() {
    super(); // must call super inderived class constructor to access 'this' keyword
    // comp-wide data
    this.state = {
      videos: [
        {
          id: 57688797,
          title: "Ind Vs Aus Cricket 2023",
          description: "Enjoy watching Cricket Series between Ind and Aus",
          thumbnailUrl:
            "https://plchldr.co/i/300x200?&bg=0000ff&fc=000000&text=IndVsAus Cricket",
          channel: "Hotstar",
          views: "1M",
          publishedDate: "1 month ago",
          isInWatchlist: false,
        },
        {
          id: 87579763,
          title: "Top 10 Goals of Messi",
          description: "Enjoy watching 10 best goals of Messi",
          thumbnailUrl:
            "https://plchldr.co/i/300x200?&bg=ff0000&fc=000000&text=Top 10 Goals of Messi",
          channel: "FIFA",
          views: "1M",
          publishedDate: "1 month ago",
          isInWatchlist: false,
        },
        {
          id: 76445546,
          title: "Top 10 Goals of Ronaldo",
          description: "Enjoy watching 10 best goals of Ronaldo",
          thumbnailUrl:
            "https://plchldr.co/i/300x200?&bg=00ff00&fc=000000&text=Top 10 Goals of Ronaldo",
          channel: "FIFA",
          views: "4M",
          publishedDate: "2 month ago",
          isInWatchlist: true,
        },
      ],
    };
  }

  handleWatchlist(index) { 
    console.log(this);
    console.log(index);
    // Do not mutate state directly. Use setState().
    // working with state immutably
    let duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;
    console.log(duplicateVideos);

    this.setState({
      videos: duplicateVideos
    });
  }

  render() {
    // Conditional Rendering
    if (!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return (
        <div className="alert alert-warning">
          Sorry! Unable to fetch Recommended Videos. Try again later!
        </div>
      );
    }

    // all component-specific transformations can be done here
    // loop-thru
    let videoList = null;
    videoList = this.state.videos.map((video, index) => {
      // console.log(video);
      return (
        <div className="col-md-3" key={video.id}>
          <div className="card">
            <img
              src={video.thumbnailUrl}
              className="card-img-top"
              alt={video.title}
            />
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <p className="card-text">{video.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{video.channel}</li>
              <li className="list-group-item">
                {video.views} Views | {video.publishedDate}
              </li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={this.handleWatchlist.bind(this, index)}
                >
                  {video.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    });
    
    return <div className="row">{videoList}</div>;
  }
}

export default RecommendedVideoList;
