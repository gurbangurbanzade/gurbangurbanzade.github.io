const HomeBackground = () => (
  <div className="home-background">
    <div className="home-background__gradient-mesh" />
    <div className="home-background__shapes">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="home-background__shape" />
      ))}
    </div>
    <div className="home-background__grid" />
  </div>
);

export default HomeBackground;
