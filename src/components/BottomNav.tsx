"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, CheckCircle, BarChart, Sparkles, Settings } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Habits", href: "/habits", icon: CheckCircle },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Coach", href: "/coach", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 md:hidden z-50 shadow-[0_-4px_25px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_25px_-5px_rgba(0,0,0,0.5)]"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <button
            key={item.name}
            onClick={() => router.push(item.href)}
            className={clsx(
              "flex flex-col items-center text-xs gap-1 p-2 rounded-xl transition-all duration-300 w-16",
              isActive 
                ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                : "text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            )}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              animate={isActive ? { y: -2 } : { y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </motion.div>
            <span>{item.name}</span>
          </button>
        );
      })}
    </motion.nav>
  );
}
