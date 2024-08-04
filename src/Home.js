// src/App.jsx
import React from 'react';
import { FiSearch, FiBell, FiSettings, FiMail } from 'react-icons/fi';
import { AiFillDashboard, AiOutlineBarChart, AiOutlineSetting, AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { IoBagCheck, IoCart, IoCloseCircle, IoCash } from 'react-icons/io5';
import { FaBullseye, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex  max-sm:w-[480px]">
            <Sidebar />
            <main className="flex-1">
                <Header />
                <Dashboard />
            </main>
        </div>
    );
};

const Sidebar = () => (
    <div className="w-16 bg-gray-800 p-4 flex flex-col items-center">
        <nav>
            <ul className="space-y-6">
                <li>
                    <AiFillDashboard className="text-gray-400 text-3xl" />
                </li>
                <li>
                    <AiOutlineBarChart className="text-gray-400 text-3xl" />
                </li>
                <li>
                    <AiOutlineSetting className="text-gray-400 text-3xl" />
                </li>
            </ul>
        </nav>
    </div>
);

const Header = () => (
    <header className="flex justify-between items-center bg-gray-700 p-3 mb-6">
        <div className="relative w-1/4">
            <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full rounded focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
            <FiMail className="text-2xl" />
            <FiSettings className="text-2xl" />
            <FiBell className="text-2xl" />
            <img src="/path/to/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
    </header>
);

const Dashboard = () => (
    <div className="p-6 pt-0">
        <h1 className="text-3xl font-bold pb-6">Dashboard</h1>
        <div className="flex flex-wrap gap-10 mb-6 max-sm:grid max-sm:grid-cols-2">
            <Card
                icon={<IoCart className="text-blue-500 text-3xl" />}
                title="Total Orders"
                value="75"
                change="+3%"
                changeType="up"
                widthClass="w-[180px]"
            />
            <Card
                icon={<IoBagCheck className="text-green-500 text-3xl" />}
                title="Total Delivered"
                value="70"
                change="-3%"
                changeType="down"
                widthClass="w-[180px]"
            />
            <Card
                icon={<IoCloseCircle className="text-red-500 text-3xl" />}
                title="Total Cancelled"
                value="05"
                change="+3%"
                changeType="up"
                widthClass="w-[180px]"
            />
            <Card
                icon={<IoCash className="text-pink-500 text-3xl" />}
                title="Total Revenue"
                value="$12k"
                change="-3%"
                changeType="down"
                widthClass="w-[180px]"
            />
            <NetProfitCard
                title="Net Profit"
                value="$6759.25"
                percentage="70%"
                change="+3%"
                widthClass="w-[380px]"
            />
        </div>
        <div className="activitygoal mb-6 flex flex-wrap gap-10 justify-between  max-sm:grid max-sm:grid-cols-1">
            <div className="flex-1" style={{ maxWidth: '600px' }}>
                <Activity />
            </div>
            <div className="flex-1" style={{ maxWidth: '450px' }}>
                <Goals />
            </div>
        </div>
        <div className="min-h-screen w-full activitygoal1 bg-gray-900 text-gray-100 flex justify-between  max-sm:grid max-sm:grid-cols-1">

            <div className="min-h-screen bg-gray-900 w-[800px] text-white p-5 max-sm:w-[365px] max-sm:p-0">
                <OrderTable orders={orders} />
            </div>

            <div className="flex-1 max-sm:mt-2" style={{ maxWidth: '450px' }}>
                <CustomerFeedback />
            </div>
        </div>
    </div>
);

const Card = ({ icon, title, value, change, changeType, widthClass }) => (
    <div className={`bg-gray-800 p-4 rounded-lg ${widthClass}`}>
        <div className="text-gray-400 mb-2">{title}</div>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className={`text-sm ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</div>
    </div>
);

const NetProfitCard = ({ title, value, percentage, change, widthClass }) => (
    <div className={`bg-gray-800 p-4 rounded-lg ${widthClass}`}>
        <div className="text-gray-400 mb-2">{title}</div>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className="text-gray-400 mb-2">Percentage: {percentage}</div>
        <div className={`text-sm ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</div>
    </div>
);

const Activity = () => {
    const data = {
        labels: ['6', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
            {
                label: 'Activity',
                data: [7000, 5000, 6000, 4000, 8000, 9000, 7000, 11000, 14000, 15000, 10000, 13000, 7000],
                backgroundColor: '#7cb6ff',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 16000,
            },
        },
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-gray-400 mb-2">Activity Chart</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

const Goals = () => (
    <div className="bg-gray-800 p-4 rounded-lg">
        <div className="text-gray-400 mb-2">Goals</div>
        <div>
            <NavItem icon={<FaBullseye className="text-red-500 text-2xl" />} title="Goals" />
            <NavItem icon={<FaUtensils className="text-blue-500 text-2xl" />} title="Popular Dishes" />
            <NavItem icon={<FaConciergeBell className="text-teal-500 text-2xl" />} title="Menus" />
        </div>
    </div>
);

const NavItem = ({ icon, title }) => (
    <div className="flex items-center justify-between p-2 mb-4 bg-gray-700 rounded-lg">
        <div className="flex items-center">
            {icon}
            <span className="ml-4">{title}</span>
        </div>
        <AiOutlineRight className="text-gray-400" />
    </div>
);

// const OrderTable = ({ orders }) => {
//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full bg-gray-800">
//                 <thead>
//                     <tr>
//                         <th className="px-4 py-2">Customer</th>
//                         <th className="px-4 py-2">Order No.</th>
//                         <th className="px-4 py-2">Amount</th>
//                         <th className="px-4 py-2">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order, index) => (
//                         <tr key={index} className="border-t border-gray-700">
//                             <td className="px-4 py-2 flex items-center">
//                                 <img
//                                     className="w-8 h-8 rounded-full mr-3"
//                                     src={`https://randomuser.me/api/portraits/lego/${index}.jpg`}
//                                     alt={order.customer}
//                                 />
//                                 {order.customer}
//                             </td>
//                             <td className="px-4 py-2">{order.orderNo}</td>
//                             <td className="px-4 py-2">{order.amount}</td>
//                             <td className="px-4 py-2">
//                                 <span
//                                     className={`px-2 py-1 rounded ${order.status === 'Delivered' ? 'bg-green-500' : order.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}
//                                 >
//                                     {order.status}
//                                 </span>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const orders = [
//     { customer: 'John Doe', orderNo: '12345', amount: '$50.00', status: 'Delivered' },
//     { customer: 'Jane Smith', orderNo: '67890', amount: '$75.00', status: 'Pending' },
//     { customer: 'Chris Johnson', orderNo: '54321', amount: '$30.00', status: 'Cancelled' },
// ];

// const CustomerFeedback = () => (
//     <div className="bg-gray-800 p-4 rounded-lg">
//         <h2 className="text-gray-400 mb-2">Customer Feedback</h2>
//         <ul className="space-y-4">
//             <li className="flex items-start">
//                 <AiFillStar className="text-yellow-500 text-2xl" />
//                 <div className="ml-4">
//                     <h3 className="text-lg font-bold">Great Service!</h3>
//                     <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 </div>
//             </li>
//             <li className="flex items-start">
//                 <AiFillStar className="text-yellow-500 text-2xl" />
//                 <div className="ml-4">
//                     <h3 className="text-lg font-bold">Delicious Food!</h3>
//                     <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 </div>
//             </li>
//             <li className="flex items-start">
//                 <AiFillStar className="text-yellow-500 text-2xl" />
//                 <div className="ml-4">
//                     <h3 className="text-lg font-bold">Fast Delivery!</h3>
//                     <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 </div>
//             </li>
//         </ul>
//     </div>
// );


const OrderTable = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Customer</th>
                        <th className="px-4 py-2">Order No.</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="border-t border-gray-700">
                            <td className="px-4 py-2 flex items-center">
                                <img
                                    className="w-8 h-8 rounded-full mr-3"
                                    src={`https://randomuser.me/api/portraits/lego/${index}.jpg`}
                                    alt={order.customer}
                                />
                                {order.customer}
                            </td>
                            <td className="px-4 py-2">{order.orderNo}</td>
                            <td className="px-4 py-2">{order.amount}</td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-2 py-1 rounded ${order.status === 'Delivered' ? 'bg-green-500' : order.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



const orders = [
    { customer: 'Wade Warren', orderNo: '15476256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78595215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20956732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78595215', amount: '$45.88', status: 'Cancelled' },
   
];



const CustomerFeedback = () => (
    <div className="bg-gray-800 p-4 rounded-lg">
        <div className="text-gray-400 mb-4">Customer's Feedback</div>
        <ul>
            <FeedbackItem
                customer="Jenny Wilson"
                feedback="The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
                rating={5}
            />
            <FeedbackItem
                customer="Dianne Russell"
                feedback="We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
                rating={5}
            />
            <FeedbackItem
                customer="Devon Lane"
                feedback="Amazing service, and the steaks were very tender and juicy."
                rating={5}
            />
        </ul>
    </div>
);

const FeedbackItem = ({ customer, feedback, rating }) => (
    <li className="mb-4">
        <div className="flex items-center mb-2">
            <img src="/path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-4" />
            <div>
                <p className="font-bold">{customer}</p>
                <div className="flex">
                    {[...Array(rating)].map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500" />
                    ))}
                </div>
            </div>
        </div>
        <p className="text-sm">{feedback}</p>
    </li>
);








export default App;
