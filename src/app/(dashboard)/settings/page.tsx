"use client";

import { motion } from "framer-motion";
import { User, Bell, Palette, Globe, Lock } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your account and visual preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <nav className="space-y-2">
          {["Account", "Notifications", "Appearance", "General", "Privacy"].map((item, i) => (
            <button
              key={item}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                i === 0
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              {i === 0 && <User size={18} />}
              {i === 1 && <Bell size={18} />}
              {i === 2 && <Palette size={18} />}
              {i === 3 && <Globe size={18} />}
              {i === 4 && <Lock size={18} />}
              {item}
            </button>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-3 space-y-6"
        >
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Account Profile</h2>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-linear-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                U
              </div>
              <div>
                <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Change Avatar
                </button>
              </div>
            </div>

            <form className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Display Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-gray-100"
                  defaultValue="Achiever"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  disabled
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 cursor-not-allowed"
                  defaultValue="you@example.com"
                />
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl shadow-md transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Theme Preference</h2>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <button className="p-4 rounded-xl border-2 border-indigo-500 bg-gray-50 dark:bg-gray-900 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Light</span>
              </button>
              <button className="p-4 rounded-xl border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-900 flex flex-col items-center gap-3 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 shadow-sm" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Dark</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
