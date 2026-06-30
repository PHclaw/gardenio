import React from 'react';
import { Habit } from '../types/habit';

interface HabitListProps {
  habits: Habit[];
  onCompleteHabit: (habitId: string) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onCompleteHabit }) => {
  const getProgressColor = (progress: number, target: number): string => {
    const percentage = (progress / target) * 100;
    if (percentage >= 100) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-yellow-500';
    if (percentage >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getProgressText = (progress: number, target: number): string => {
    if (progress >= target) return '✅ 已完成';
    return `${progress}/${target}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 我的习惯</h2>
      
      {habits.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-4">🌱</div>
          <p>还没有添加任何习惯</p>
          <p className="text-sm mt-2">点击"添加习惯"开始你的花园之旅</p>
        </div>
      ) : (
        <div className="space-y-4">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                habit.completed
                  ? 'bg-green-50 border-green-300'
                  : 'bg-gray-50 border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{habit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{habit.name}</h3>
                    <p className="text-sm text-gray-600">{habit.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-blue-600">🔥 {habit.streak}</span>
                  {!habit.completed && (
                    <button
                      onClick={() => onCompleteHabit(habit.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      完成
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>进度</span>
                    <span>{getProgressText(habit.progress, habit.targetStreak)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(habit.progress, habit.targetStreak)}`}
                      style={{ width: `${Math.min((habit.progress / habit.targetStreak) * 100, 100)}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-500">
                  <div>目标: {habit.targetStreak}</div>
                  <div>颜色: {habit.color}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HabitList;