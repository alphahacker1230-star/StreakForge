"use client";

import { motion } from "framer-motion";
import { Target, Plus } from "lucide-react";

export default function GoalsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Goals</h1>
          <p className="text-gray-500 mt-2">Set long-term targets and track your progress.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
          <Plus size={18} /> New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50 hover:scale-[1.02] transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Read 50 Books</h3>
              <p className="text-sm text-gray-500">12 / 50 completed</p>
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "24%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
