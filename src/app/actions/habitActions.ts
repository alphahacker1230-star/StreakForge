"use server";

import connectToDatabase from "@/lib/mongoose";
import { Habit, Log } from "@/lib/models";
import { revalidatePath } from "next/cache";

export async function getHabits(userId: string) {
  await connectToDatabase();
  const habits = await Habit.find({ userId }).lean();
  return JSON.parse(JSON.stringify(habits));
}

export async function addHabit(userId: string, name: string, frequency: string[], time: string) {
  await connectToDatabase();
  const newHabit = await Habit.create({ userId, name, frequency, time });
  revalidatePath("/habits");
  return JSON.parse(JSON.stringify(newHabit));
}

export async function updateHabit(habitId: string, name: string, frequency: string[], time: string) {
  await connectToDatabase();
  const updatedHabit = await Habit.findByIdAndUpdate(habitId, { name, frequency, time }, { new: true }).lean();
  revalidatePath("/habits");
  return JSON.parse(JSON.stringify(updatedHabit));
}

export async function deleteHabit(habitId: string) {
  await connectToDatabase();
  await Habit.findByIdAndDelete(habitId);
  await Log.deleteMany({ habitId });
  revalidatePath("/habits");
  return true;
}

export async function toggleHabitLog(habitId: string, date: string, completed: boolean) {
  await connectToDatabase();
  let log = await Log.findOne({ habitId, date });
  if (log) {
    log.completed = completed;
    await log.save();
  } else {
    log = await Log.create({ habitId, date, completed });
  }
  revalidatePath("/habits");
  return JSON.parse(JSON.stringify(log));
}

export async function getLogs(habitId: string) {
  await connectToDatabase();
  const logs = await Log.find({ habitId }).lean();
  return JSON.parse(JSON.stringify(logs));
}
