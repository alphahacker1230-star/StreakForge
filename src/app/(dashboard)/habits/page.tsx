"use client";

import { useEffect, useState } from "react";
import { getHabits, addHabit, deleteHabit } from "@/app/actions/habitActions";
import { motion } from "framer-motion";
import { Plus, Trash2, Clock, Calendar, Flame } from "lucide-react";

export default function HabitsPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [habits, setHabits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState<string[]>(["Daily"]);

  useEffect(() => {
    const defaultUserId = "mock-user-id";
    setUserId(defaultUserId);
    fetchHabits(defaultUserId);
  }, []);

  const fetchHabits = async (id: string) => {
    try {
      const data = await getHabits(id);
      setHabits(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !name) return;
    try {
      const h = await addHabit(userId, name, frequency, time);
      setHabits((prev) => [...prev, h]);
      setName("");
      setTime("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteHabit(id);
      setHabits(habits.filter((h) => h._id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading habits...</div>;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">My Habits</h1>
          <p className="text-gray-500 mt-2">Manage your daily routines and build consistency.</p>
        </div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleCreate}
        className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-xl grid gap-4 grid-cols-1 md:grid-cols-4"
      >
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Habit Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
            placeholder="e.g. Read 10 pages"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time of Day</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-gray-100"
          >
            <option value="">Anytime</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </motion.form>

      <div className="space-y-4">
        {habits.length === 0 ? (
          <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-gray-500">No habits created yet. Add one above!</p>
          </div>
        ) : (
          habits.map((habit, i) => (
            <motion.div
              key={habit._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-md border border-gray-100 dark:border-gray-700/50 flex items-center justify-between group hover:shadow-lg transition-all hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{habit.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {habit.frequency[0] || "Daily"}</span>
                    {habit.time && <span className="flex items-center gap-1"><Clock size={14} /> {habit.time}</span>}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleDelete(habit._id)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
              >
                <Trash2 size={18} />
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
