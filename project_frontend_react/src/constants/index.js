import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosStats,
  IoIosSettings,
  IoIosAdd ,
  IoIosCube,
  IoIosNotifications ,
  IoIosCheckmarkCircle,
  IoIosBookmark,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from "react-icons/fa";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import user04 from "../assets/user04.webp";
import user05 from "../assets/rodrigouser.jpg";
export const links = [
  {
    href: "#",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "Kanban",
    badge: {
      text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: FaFacebookMessenger,
    text: "Chat Team",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Users",
  },
  {
    href: "#",
    icon: FaListAlt,
    text: "Demands",
  },
  {
    href: "#",
    icon: GoGoal,
    text: "Goals",
  },
  {
    href: "#",
    icon: IoIosBookmark,
    text: "Events",
  },
];

export const empolyeesData = [
  {
    title: "Pending demands",
    icon: IoIosCube,
    count: 15,
    bgColor: "bg-gray-100",
  },
  {
    title: "Success demands",
    icon: IoIosCheckmarkCircle,
    count: 37,
    bgColor: "bg-blue-100",
  },
  {
    title: "Outstanding events",
    icon: IoIosNotifications ,
    count: 7,
    bgColor: "bg-blue-100",
  },
];

export const shortcutLink = [
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Data analysis",
    icon: IoIosStats,
  },
  {
    title: "Add demands",
    icon: IoIosAdd,
  },
  {
    title: "Add goals",
    icon: IoIosAdd,
  },
  {
    title: "Add events",
    icon: IoIosAdd,
  },
  {
    title: "Config",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Robert Fox",
    country: "USA",
    role: "DevOps Developer",
    image: user01,
    bgColor: "bg-gray-100",
  },
  {
    name: "Jane Doe",
    country: "UK",
    role: "Frontend Developer",
    image: user02,
    bgColor: "bg-gray-100",
  },
  {
    name: "John Smith",
    country: "Canada",
    role: "Backend Developer",
    image: user03,
    bgColor: "bg-gray-100",
  },
  {
    name: "Alice Johnson",
    country: "Australia",
    role: "Full Stack Developer",
    image: user04,
    bgColor: "bg-gray-100",
  },
  {
    name: "Rodrigo Luz",
    country: "BR",
    role: "Customer Success Analyst",
    image: user05,
    bgColor: "bg-gray-100",
  },
];

export const events = [
  {
    date: "01 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us for our annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup USA",
    description: "Connect with professionals in your field.",
  },
  {
    date: "29 Oct",
    title: "Networking Meetup BR",
    description: "Connect with professionals in your field.",
  },
];

// ------- ==
// chart data, later we will use this!!!

// const options = {
//   series: [44, 55, 41],
//   options: {
//     chart: {
//       type: "donut",
//       height: 350,
//     },
//     labels: ["Desktop", "Tablet", "Mobile"],
//     colors: ["#FF5733", "#33FF57", "#3357FF"],
//     legend: {
//       position: "bottom",
//       labels: {
//         colors: darkMode ? "#dddddd" : "#000000",
//       },
//     },
//     dataLabels: {
//       style: {
//         colors: ["#dddddd"],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   },
// };

// ..........
// const chartConfig = {
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       height: 240,
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     plotOptions: {
//       bar: {
//         columnWidth: "40%",
//         borderRadius: 2,
//       },
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#a0a0a0",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };
