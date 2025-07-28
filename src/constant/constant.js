import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  icons,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  User,
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
