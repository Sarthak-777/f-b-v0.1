import { useEffect } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import Timeline from "../components/timeline";
import RightSidebar from "../components/rightSidebar";

function Dashboard() {
  useEffect(() => {
    document.title = "Facebook";
  });
  return (
    <div className="bg-gray-100 w-full ">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-96">
        <LeftSidebar />
        <Timeline />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
