"use client";

import { useEffect, useState } from "react";
import { getHabits, getLogs, toggleHabitLog } from "@/app/actions/habitActions";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame } from "lucide-react";

export default function HabitTracker() {
  const [userId, setUserId] = useState<string | null>(null);
  const [habits, setHabits] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const defaultUserId = "mock-user-id";
    setUserId(defaultUserId);
    fetchData(defaultUserId);
  }, []);

  const fetchData = async (id: string) => {
    try {
      const habitsData = await getHabits(id);
      setHabits(habitsData);

      const allLogs = await Promise.all(
        habitsData.map((h: any) => getLogs(h._id))
      );
      setLogs(allLogs.flat());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (habitId: string) => {
    try {
      const existingLogIndex = logs.findIndex(l => l.habitId === habitId && l.date === today);
      let isCompleted = true;
      let newLogs = [...logs];
      
      if (existingLogIndex >= 0) {
        isCompleted = !newLogs[existingLogIndex].completed;
        newLogs[existingLogIndex].completed = isCompleted;
      } else {
        newLogs.push({ habitId, date: today, completed: true });
      }
      setLogs(newLogs);

      await toggleHabitLog(habitId, today, isCompleted);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div className="text-gray-500 animate-pulse">Loading today's habits...</div>;

  if (habits.length === 0) {
    return (
      <div className="text-center p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-white/50 dark:bg-gray-800/50">
        <p className="text-gray-500">You don't have any habits yet. Go to Habits page to create one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit, i) => {
        const isCompleted = logs.find(l => l.habitId === habit._id && l.date === today)?.completed || false;
        
        const completionLogs = logs.filter(l => l.habitId === habit._id && l.completed);
        const streak = completionLogs.length;

        return (
          <motion.div
            key={habit._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-2xl border flex items-center justify-between transition-all duration-300 ${isCompleted ? 'bg-indigo-50/50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-500/30 shadow-md shadow-indigo-500/10' : 'bg-white/70 dark:bg-gray-800/70 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-[1.01]'}`}
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => handleToggle(habit._id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isCompleted ? 'bg-linear-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-gray-100 dark:bg-gray-700 text-transparent border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'}`}
              >
                <Check size={20} strokeWidth={isCompleted ? 3 : 2} className={isCompleted ? '' : 'opacity-0'} />
              </motion.button>
              
              <div>
                <h4 className={`font-semibold transition-all ${isCompleted ? 'text-gray-900 dark:text-gray-100 line-through decoration-indigo-300 dark:decoration-indigo-600 opacity-70' : 'text-gray-900 dark:text-gray-100'}`}>
                  {habit.name}
                </h4>
                {habit.time && <p className="text-xs text-gray-500">{habit.time}</p>}
              </div>
            </div>

            <AnimatePresence>
              {streak > 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-sm"
                >
                  <Flame size={16} className={isCompleted ? "fill-orange-400" : ""} />
                  {streak}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
