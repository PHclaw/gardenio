import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GardenView from './components/GardenView';
import HabitList from './components/HabitList';
import AddHabitModal from './components/AddHabitModal';
import { GameState, Habit } from './types/habit';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    habits: [],
    gardenPlots: [],
    achievements: [],
    totalStreak: 0,
    gardenLevel: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize game state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('gardenio-state');
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, []);

  // Save game state to localStorage
  useEffect(() => {
    localStorage.setItem('gardenio-state', JSON.stringify(gameState));
  }, [gameState]);

  const addHabit = (habit: Omit<Habit, 'id'>) => {
    const newHabit: Habit = {
      ...habit,
      id: Date.now().toString(),
      progress: 0,
    };
    setGameState(prev => ({
      ...prev,
      habits: [...prev.habits, newHabit],
    }));
  };

  const completeHabit = (habitId: string) => {
    setGameState(prev => {
      const updatedHabits = prev.habits.map(habit => {
        if (habit.id === habitId) {
          const newStreak = habit.streak + 1;
          const newProgress = Math.min(habit.progress + 1, habit.targetStreak);
          return {
            ...habit,
            completed: true,
            streak: newStreak,
            progress: newProgress,
            lastCompleted: new Date(),
          };
        }
        return habit;
      });

      return {
        ...prev,
        habits: updatedHabits,
        totalStreak: updatedHabits.reduce((sum, habit) => sum + habit.streak, 0),
      };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header onAddHabit={() => setIsModalOpen(true)} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GardenView gameState={gameState} />
          <HabitList 
            habits={gameState.habits} 
            onCompleteHabit={completeHabit}
          />
        </div>
      </div>

      <AddHabitModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddHabit={addHabit}
      />
    </div>
  );
};

export default App;