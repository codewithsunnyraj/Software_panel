import { Clock } from "lucide-react";
import React from "react";
import { Acitivites } from "../../constant/constant";
const AcitivityFeed = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="">
          <h3 className="text-lg font-black text-slate-800 dark:text-white">
            Acitivity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recent System Acitivites
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {Acitivites.map((acitivity, index) => (
            <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className={`p-2 rounded-lg ${acitivity.bgColor} `}>
                <acitivity.icon className={`w-4 h-4 ${acitivity.bgColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {acitivity.title}
                </h4>
                <p className="text-sm truncate text-slate-600 dark:text-slate-400">
                  {acitivity.description}
                </p>
                <div className="flex items-center-safe space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {acitivity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcitivityFeed;
