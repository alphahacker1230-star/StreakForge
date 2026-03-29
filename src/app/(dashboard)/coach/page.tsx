"use client";

import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";

export default function AICoachPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">AI Coach</h1>
        <p className="text-gray-500 mt-2">Your personal assistant for building better habits.</p>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white shadow-md">
              <Bot size={20} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700/50 rounded-2xl px-5 py-3 text-gray-800 dark:text-gray-200 max-w-[80%] rounded-tl-none">
              Hello Achiever! I noticed you are on a 12-day streak. Keep it up! How can I help you today?
            </div>
          </motion.div>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700/50">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask for advice, tips, or motivation..."
              className="w-full pl-5 pr-12 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-gray-100 shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
