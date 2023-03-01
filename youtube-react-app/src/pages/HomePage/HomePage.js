import LatestVideo from "./LatestVideo/LatestVideo";
import TrendingVideoList from "./TrendingVideoList/TrendingVideoList";

const HomePage = () => {

  return (
    <div className="pt-2">
      <h1 className="text-center">Learn about Main Concepts of ReactJS</h1>
      <h2>Latest Videos | Fn Comp and Props Demo</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestVideo
            id="1"
            title="FraVsArg Football 2022 Highlights"
            thumbnailUrl="https://plchldr.co/i/300x200?&bg=ff0000&fc=ffffff&text=FraVsArg"
            channel="FIFA"
            views="5.5M"
            publishedDate="10 days ago"
          >
            Watch higlights of Arg vs France Final at FIFA 2022, Qatar
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            id="2"
            title="EngVsNZ Test Cricket 2023 Highlights"
            thumbnailUrl="https://plchldr.co/i/300x200?&bg=00ff00&fc=000000&text=EngVsNZTest"
            channel="ECB"
            views="4M"
            publishedDate="1 day ago"
          >
            Watch thrilling highlights of EngVsNZ Test Cricket 2023
          </LatestVideo>
        </div>
        {/*
        <div className="col-md-3">
          <LatestVideo />
        </div>
        <div className="col-md-3">
          <LatestVideo />
        </div> */}
      </div>

      <hr/>
      <h2>Trending Videos | Class Comp, States, Events, Props Demo</h2>
      <TrendingVideoList />
    </div>
  );
}

export default HomePage;