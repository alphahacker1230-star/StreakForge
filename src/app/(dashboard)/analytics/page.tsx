"use client";

import { motion } from "framer-motion";
import WeeklyBarChart from "@/components/charts/WeeklyBarChart";
import ConsistencyLineChart from "@/components/charts/ConsistencyLineChart";
import CompletionPieChart from "@/components/charts/CompletionPieChart";

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Analytics</h1>
        <p className="text-gray-500 mt-2">Deep dive into your habit data and trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Weekly Performance</h2>
          <WeeklyBarChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Long-term Consistency</h2>
          <ConsistencyLineChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50 md:col-span-2 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Overall Completion</h2>
            <p className="text-gray-500 max-w-sm">
              You are completing 75% of your habits this month. This is a 10% increase from last month! Keep up the great work.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <CompletionPieChart />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
