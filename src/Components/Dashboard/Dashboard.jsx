import { Chart } from "chart.js";
import logo from "../../assets/logo2.png";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="flex max-h-fit bg-gray-100">
      <div className=" max-h-fit text-gray-800 w-64 ">
        <div>
          <img src={logo} alt="" width={"50%"} />
        </div>
        <div>
          <ul className="space-y-5 bg-base-200 text-base-content p-5 max-h-fit">
            {/* Sidebar content here */}
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>My Course</a>
            </li>
            <li>
              <a>Compeleted</a>
            </li>
            <li>
              <a>Financial Ad</a>
            </li>
            <li>
              <a>Transaction</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <div className="space-y-5">
              <li className="mt-[200px]">
                <a>Support</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex-grow bg-gray-100">
        <div className="flex justify-between">
          <h2 className="text-4xl">Overview</h2>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          <div className="space-y-3">
            <div className="card bg-gradient-to-t from-cyan-200 to-blue-500 max-h-fit">
              <div className="p-5">
                <h2 className="card-title">
                  Foundation of User Experience (UX) Design
                </h2>
                <p>4 Assignment . 20 Videos</p>
                <div className="flex justify-between items-center gap-16">
                  <div className="card-actions justify-start mt-10">
                    <button className="btn btn-primary">Continue Course</button>
                  </div>
                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 80 }}
                    role="progressbar"
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-gray-200 max-h-fit">
              <div className="p-5">
                <h2 className="card-title">
                  Start The UX Design Process: <br />
                  Empathize, Define and Ideate
                </h2>
                <p>4 Assignment . 20 Videos</p>
                <div className="flex justify-between items-center gap-16">
                  <div className="card-actions justify-start mt-5">
                    <button className="btn btn-primary">Continue Course</button>
                  </div>
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 65 }}
                    role="progressbar"
                  >
                    65%
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-gray-200 max-h-fit">
              <div className="p-5">
                <h2 className="card-title">
                  Build Wireframes and Low- Fidelity Prototypes
                </h2>
                <p>4 Assignment . 20 Videos</p>
                <div className="flex justify-between items-center gap-16">
                  <div className="card-actions justify-start mt-10">
                    <button className="btn btn-primary">Continue Course</button>
                  </div>
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 85 }}
                    role="progressbar"
                  >
                    85%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="card bg-base-100 w-96">
                <div className="card-body">
                  <h2 className="card-title text-4xl font-bold">04</h2>
                  <div className="flex justify-between">
                    <p>Completed Course</p>
                    <p>20% increase</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-base-100 w-96">
                <div className="card-body">
                  <h2 className="card-title text-4xl font-bold">12</h2>
                  <div className="flex justify-between">
                    <p>Course in Progress</p>
                    <p>1% Decrease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
