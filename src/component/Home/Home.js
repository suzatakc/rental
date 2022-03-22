import { Banner } from "../Banner/Banner";
import { Features } from "../Features/Features";
import { MapPage } from "../MapPage/MapPage";
import { Navbar } from "../Navbar/Navbar";
import { OurBikes } from "../OurBikes/OurBikes";

export const Home = () => {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
        <Features />
        <OurBikes />
        <MapPage />
      </div>
    </div>
  );
};
