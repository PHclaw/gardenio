import React from 'react';

interface HeaderProps {
  onAddHabit: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddHabit }) => {
  return (
    <header className="bg-white shadow-sm border-b border-green-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">🌱</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">习惯花园</h1>
              <p className="text-gray-600">可视化习惯追踪游戏</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">🌿 Lv.{1}</div>
              <div className="text-sm text-gray-500">花园等级</div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">🔥 0</div>
              <div className="text-sm text-gray-500">总连击</div>
            </div>
            
            <button
              onClick={onAddHabit}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>➕</span>
              <span>添加习惯</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;