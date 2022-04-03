import { Banner } from "../Banner/Banner";
import { Features } from "../Features/Features";
import { MapPage } from "../MapPage/MapPage";
import { AdminHeader } from "../Navbar/AdminHeader";
import { OurBikes } from "../OurBikes/OurBikes";

export const AdminPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="home-page">
        <Banner />
        <Features />
        <OurBikes />
        <MapPage />
      </div>
    </div>
  );
};
