import { useEffect } from "react";
import Header from "../components/Header";

function Dashboard() {
  useEffect(() => {
    document.title = "Facebook";
  });
  return (
    <div className="bg-gray-100 h-screen w-full">
      <Header />
      <p>Hello</p>
    </div>
  );
}

export default Dashboard;
