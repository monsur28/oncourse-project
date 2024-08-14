import logo from "../../assets/logo2.png";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Course Activity",
        data: [12, 19, 3, 5, 2, 3, 20, 15, 8, 12, 14, 9],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const reminders = [
    {
      type: "Assignment -1",
      course: "Foundations of User Experience",
      due: "5 June 2024",
      faculty: "Same Jhon",
      status: "Done",
      statusColor: "bg-blue-900",
      profileImg: "https://via.placeholder.com/150", // Replace with actual image source
    },
    {
      type: "Quiz- 2",
      course: "Foundations of User Experience",
      due: "5 Aug 2024",
      faculty: "Jhon Ab",
      status: "Coming",
      statusColor: "bg-orange-600",
      profileImg: "https://via.placeholder.com/150",
    },
    {
      type: "Last Class",
      course: "Foundations of User Experience",
      due: "5 June 2024",
      faculty: "Kabir Same",
      status: "Done",
      statusColor: "bg-blue-900",
      profileImg: "https://via.placeholder.com/150",
    },
    // Add more reminder objects here
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Course Activity",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
        <div className="grid grid-cols-2 gap-4 ">
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
          <div>
            <div className="flex gap-3">
              <div>
                <div className="card bg-base-100 w-64">
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
                <div className="card bg-base-100 w-64">
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
            <div className="w-full">
              <Bar data={data} options={options} />
            </div>
            <div className="bg-gray-100 w-full flex items-center justify-center">
              <div className="p-6 max-w-7xl  bg-white rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Reminders</h2>
                  <button className="text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-1">
                    Monthly
                  </button>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="pb-3">Type</th>
                      <th className="pb-3">Due</th>
                      <th className="pb-3">Faculty</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reminders.map((reminder, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-3 flex items-center">
                          <div className="bg-blue-100 p-2 rounded-md mr-4">
                            {/* Replace with actual icon or image */}
                            <img
                              src="https://via.placeholder.com/40"
                              alt=""
                              className="w-6 h-6"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              {reminder.type}
                            </p>
                            <p className="text-sm text-gray-500">
                              {reminder.course}
                            </p>
                          </div>
                        </td>
                        <td className="py-3">{reminder.due}</td>
                        <td className="py-3 flex items-center">
                          <img
                            src={reminder.profileImg}
                            alt={reminder.faculty}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <span className="text-blue-600">
                            {reminder.faculty}
                          </span>
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-white text-sm ${reminder.statusColor}`}
                          >
                            {reminder.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
