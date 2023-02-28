import LatestVideo from "./LatestVideo/LatestVideo";

const HomePage = () => {
  return (
    <div className="pt-2">
      <h1 className="text-center">Learn about Main Concepts of ReactJS</h1>
      <h2>Latest Videos | Props Demo</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestVideo />
        </div>
        {/* <div className="col-md-3">
          <LatestVideo />
        </div>
        <div className="col-md-3">
          <LatestVideo />
        </div>
        <div className="col-md-3">
          <LatestVideo />
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;