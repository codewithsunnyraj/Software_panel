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
