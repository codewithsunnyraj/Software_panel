import {
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  icons,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

export const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "Overview", label: "Overview" },
      {
        id: "reports",
        label: "Reports",
      },
      {
        id: "insights",
        label: "Insights",
      },
    ],
  },
  {
    id: "user",
    icon: User,
    label: "Users",
    count: "2.4k",
    submenu: [
      {
        id: "all-users",
        label: "All User",
      },
      {
        id: "Roles",
        label: "Roles & Permissions User",
      },
      {
        id: "activity",
        label: "Acitivity",
      },
    ],
  },
  {
    id: "ecommerece",
    icon: ShoppingBag,
    label: "E-commerce",
    count: "2.4k",
    submenu: [
      {
        id: "Products",
        label: "Products",
      },
      {
        id: "Orders",
        label: "Orders",
      },
      {
        id: "Customers",
        label: "Customers",
      },
    ],
  },
  {
    id: "message",
    icon: MessageSquare,
    label: "Message",
    badge: "12",
  },
  {
    id: "Inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "Transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "Setting",
    icon: Settings,
    label: "Setting",
  },
];

export const stats = [
  {
    title: "Total Revenue",
    value: "$124.53",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-400",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "8,5505",
    change: "+2.5%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-emerald-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "24,453",
    change: "+15.5%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-pink-900/20",
    textColor: "text-purple-600 dark:text-pink-400",
  },
  {
    title: "Page Views",
    value: "456,453",
    change: "-45.5%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

export const data = [
  {
    month: "Jan",
    revenue: 45000,
    expenses: 32000,
  },
  {
    month: "Feb",
    revenue: 52000,
    expenses: 38000,
  },
  {
    month: "Mar",
    revenue: 48000,
    expenses: 35000,
  },
  {
    month: "Apr",
    revenue: 61000,
    expenses: 42000,
  },
  {
    month: "May",
    revenue: 55000,
    expenses: 40000,
  },
  {
    month: "Jun",
    revenue: 67000,
    expenses: 45000,
  },
  {
    month: "Jul",
    revenue: 72000,
    expenses: 48000,
  },
  {
    month: "Aug",
    revenue: 69000,
    expenses: 46000,
  },
  {
    month: "Sep",
    revenue: 78000,
    expenses: 52000,
  },
  {
    month: "Oct",
    revenue: 74000,
    expenses: 50000,
  },
  {
    month: "Nov",
    revenue: 82000,
    expenses: 55000,
  },
  {
    month: "Dec",
    revenue: 89000,
    expenses: 58000,
  },
];

export const data2 = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 30, color: "#8b5cf6" },
  { name: "Books", value: 15, color: "#10b981" },
  { name: "Others", value: 10, color: "#f59e0b" },
];

export const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "Macbook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Sun Smith",
    product: "Anroid Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3849",
    customer: "Jojo Smith",
    product: "Macbook Pro 16",
    amount: "$2,399",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3850",
    customer: "Stoke",
    product: "Ipad Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3851",
    customer: "Tannu Priya",
    product: "Macbook Pro 16",
    amount: "$2,399",
    status: "cancel",
    date: "2024-01-15",
  },
];

export const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iphone 15 pro",
    sales: 2156,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "Airpods pro",
    sales: 3421,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "ipad Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
];

export const Acitivites = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    description: "John Smith Created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    description: "John Smith Created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "order",
    icon: ShoppingCart,
    title: "New Order Recieved",
    description: "John Smith Created an account",
    time: "5 minutes ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    description: "John Smith Created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
];
