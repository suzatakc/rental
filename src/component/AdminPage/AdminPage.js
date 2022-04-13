import { Banner } from "../Banner/Banner";
import { AdminHeader } from "../Navbar/AdminHeader";

export const AdminPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="home-page">
        <Banner />
      </div>
    </div>
  );
};
