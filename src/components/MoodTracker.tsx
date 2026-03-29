"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const moods = [
  { emoji: "😊", label: "Great" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😞", label: "Bad" },
];

export default function MoodTracker() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">How are you feeling today?</h3>
      <div className="flex justify-between items-center gap-4">
        {moods.map((mood) => (
          <motion.button
            key={mood.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelected(mood.label)}
            className={`flex-1 aspect-square rounded-2xl text-4xl flex items-center justify-center transition-all ${selected === mood.label ? 'bg-indigo-50 dark:bg-indigo-500/20 border-2 border-indigo-500 shadow-md shadow-indigo-500/20 grayscale-0' : 'bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent grayscale hover:grayscale-0'}`}
          >
            {mood.emoji}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
