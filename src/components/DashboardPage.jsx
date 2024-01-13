import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContex";
import Header from "../components/Header";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
import { getNationalityData, getGenderData } from "../utils/functions";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=3000&inc=name,gender,nat"
      );
      const data = await response.json();
      setUserData(data.results);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="w-[100vw] h-[90vh] flex bg-gray-200">
        <div className="bg-gray-800 text-white w-1/6 py-6">
          <h2 className="text-3xl font-semibold text-center">Dashboard</h2>
        </div>

        <div className="flex-1 flex flex-row justify-around items-center">
          <div className="w-2/5 ">
            <h2 className="text-black font-semibold text-center text-3xl py-2">
              Gender Distribution
            </h2>
            <Doughnut data={getGenderData(userData)} />
          </div>

          <div className="w-2/5">
            <h2 className="text-black font-semibold text-center text-3xl py-2">
              Nationality Distribution
            </h2>
            <Doughnut data={getNationalityData(userData)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
