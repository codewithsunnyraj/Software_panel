import { ChevronDown, Zap } from "lucide-react";
import React, { useState } from "react";
import { menuItems } from "../../constant/constant";

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));
  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItems(newExpanded);
  };
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      }  transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {/* Condition Rendering */}
          {!collapsed && (
            <div className="">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((items) => {
          return (
            <div key={items.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  currentPage === items.id || items.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (items.submenu) {
                    toggleExpanded(items.id);
                  } else {
                    onPageChange(items.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <items.icon className="w-5 h-5 dark:text-slate-200 text-slate-800" />
                  {/* Conditional rendering */}

                  {!collapsed && (
                    <>
                      <span className="font-medium dark:text-slate-200 text-slate-800 ml-2">
                        {items.label}
                      </span>
                      {items.badge && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded-full ">
                          {items.badge}
                        </span>
                      )}
                      {items.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {items.count}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {!collapsed && items.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform dark:text-slate-200 text-slate-800" />
                )}
              </button>

              {/* Submenu  */}
              {!collapsed && items.submenu && expandedItems.has(items.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {items.submenu.map((submenu) => (
                    <div>
                      <button className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-lg transition-all ">
                        {submenu.label}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      {/* user profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="user"
              className="w-10 h-10 rounded-full ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Alex Johnson
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
