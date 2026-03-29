import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IHabit extends Document {
  userId: string;
  name: string;
  frequency: string[];
  time: string;
  createdAt: Date;
}

const HabitSchema = new Schema<IHabit>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  frequency: [{ type: String }],
  time: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Habit = models.Habit || model<IHabit>('Habit', HabitSchema);

export interface ILog extends Document {
  habitId: mongoose.Types.ObjectId;
  date: string;
  completed: boolean;
}

const LogSchema = new Schema<ILog>({
  habitId: { type: Schema.Types.ObjectId, ref: 'Habit', required: true },
  date: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Log = models.Log || model<ILog>('Log', LogSchema);

export interface IMood extends Document {
  userId: string;
  date: string;
  mood: string;
}

const MoodSchema = new Schema<IMood>({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  mood: { type: String, required: true },
});

export const Mood = models.Mood || model<IMood>('Mood', MoodSchema);

export interface IGoal extends Document {
  userId: string;
  title: string;
  progress: number;
}

const GoalSchema = new Schema<IGoal>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  progress: { type: Number, default: 0 },
});

export const Goal = models.Goal || model<IGoal>('Goal', GoalSchema);
