import React from 'react';
import { GameState } from '../types/habit';

interface GardenViewProps {
  gameState: GameState;
}

const GardenView: React.FC<GardenViewProps> = ({ gameState }) => {
  const { habits, gardenLevel } = gameState;

  // Generate garden grid (5x5)
  const gridSize = 5;
  const plots = [];

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const plotId = `${x}-${y}`;
      const habit = habits.find(h => h.id === plotId);
      
      let plantType = '🌱'; // Default empty plot
      let growthStage = 0;
      
      if (habit) {
        // Determine plant type based on habit color
        plantType = getPlantTypeByColor(habit.color);
        growthStage = Math.floor((habit.progress / habit.targetStreak) * 4);
      }
      
      plots.push(
        <div
          key={plotId}
          className={`w-20 h-20 border-2 border-green-300 rounded-lg flex items-center justify-center text-3xl transition-all duration-300 ${
            habit ? 'bg-green-100' : 'bg-gray-50'
          }`}
        >
          {getPlantEmoji(plantType, growthStage)}
        </div>
      );
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🌻 我的花园</h2>
      <div className="grid grid-cols-5 gap-2">
        {plots}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">花园状态</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">已种植习惯:</span>
            <span className="font-bold ml-2">{habits.length}/25</span>
          </div>
          <div>
            <span className="text-gray-600">花园等级:</span>
            <span className="font-bold ml-2">{gardenLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get plant type based on color
const getPlantTypeByColor = (color: string): string => {
  const colorMap: Record<string, string> = {
    red: '🌹',
    blue: '🌊',
    green: '🌿',
    yellow: '🌻',
    purple: '🌸',
    orange: '🍊',
    pink: '🌺',
    white: '🌼',
  };
  return colorMap[color] || '🌱';
};

// Helper function to get plant emoji based on growth stage
const getPlantEmoji = (plantType: string, growthStage: number): string => {
  const growthEmojis = ['🌱', '🌿', '🍃', '🌳', '🌺'];
  return growthEmojis[growthStage] || plantType;
};

export default GardenView;