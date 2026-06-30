export interface Habit {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  streak: number;
  completed: boolean;
  createdAt: Date;
  lastCompleted?: Date;
  targetStreak: number;
  progress: number;
}

export interface GardenPlot {
  id: string;
  habitId: string;
  x: number;
  y: number;
  plantType: string;
  growthStage: number;
  watered: boolean;
  fertilized: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface GameState {
  habits: Habit[];
  gardenPlots: GardenPlot[];
  achievements: Achievement[];
  totalStreak: number;
  gardenLevel: number;
}