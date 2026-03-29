"use client";

import { motion } from "framer-motion";
import HabitTracker from "@/components/HabitTracker";
import MoodTracker from "@/components/MoodTracker";
import CompletionPieChart from "@/components/charts/CompletionPieChart";
import WeeklyBarChart from "@/components/charts/WeeklyBarChart";
import FocusTimer from "@/components/FocusTimer";
import { ArrowUpRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Good Morning, Achiever
          </h1>
          <p className="text-gray-500 mt-1">Here's your progress overview for today.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Current Streak</h3>
          <div className="flex items-center gap-3 mt-2">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              12 Days 🔥
            </p>
            <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
              <ArrowUpRight size={14} /> 2
            </span>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Completion Rate</h3>
          <p className="text-3xl font-bold mt-2 text-gray-800 dark:text-gray-100">85%</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">XP Earned</h3>
          <p className="text-3xl font-bold mt-2 text-gray-800 dark:text-gray-100">2,450</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Weekly Activity</h2>
              <select className="bg-gray-50 dark:bg-gray-900 border-none text-sm font-medium text-gray-500 rounded-lg focus:ring-0">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <WeeklyBarChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 px-2">Today's Habits</h2>
            <HabitTracker />
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MoodTracker />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FocusTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50"
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Completion Rate</h2>
            <CompletionPieChart />
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-sm text-gray-500">Done</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-100 dark:bg-indigo-900" />
                <span className="text-sm text-gray-500">Missed</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
