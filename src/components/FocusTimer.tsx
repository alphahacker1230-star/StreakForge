"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Square, RotateCcw } from "lucide-react";

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"focus" | "break">("focus");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Optional: Play sound or show notification
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "focus" ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: "focus" | "break") => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === "focus" ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = 1 - (timeLeft / (mode === "focus" ? 25 * 60 : 5 * 60));

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700/50 flex flex-col items-center">
      <div className="flex gap-4 mb-8 bg-gray-100 dark:bg-gray-900/50 p-1.5 rounded-full">
        <button
          onClick={() => switchMode("focus")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            mode === "focus" ? "bg-white dark:bg-gray-800 text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
        >
          Focus
        </button>
        <button
          onClick={() => switchMode("break")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            mode === "break" ? "bg-white dark:bg-gray-800 text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
          }`}
        >
          Break
        </button>
      </div>

      <div className="relative flex items-center justify-center mb-8 scale-90 sm:scale-100">
        <svg className="transform -rotate-90 w-72 h-72">
          <circle
            cx="144"
            cy="144"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-100 dark:text-gray-700/50"
          />
          <motion.circle
            cx="144"
            cy="144"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "linear" }}
            strokeLinecap="round"
            className={`${mode === "focus" ? "text-indigo-500" : "text-emerald-500"}`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-6xl font-black text-gray-900 dark:text-gray-100 tracking-tight">
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-gray-500 font-medium uppercase tracking-widest text-sm mt-2">
            {mode === "focus" ? "Stay Focused" : "Take a Break"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={resetTimer}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <RotateCcw size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTimer}
          className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-xl transition-all ${
            isActive
              ? "bg-red-500 shadow-red-500/30"
              : mode === "focus"
              ? "bg-indigo-500 shadow-indigo-500/30"
              : "bg-emerald-500 shadow-emerald-500/30"
          }`}
        >
          {isActive ? <Square size={28} fill="currentColor" /> : <Play size={32} className="ml-1" fill="currentColor" />}
        </motion.button>
      </div>
    </div>
  );
}
