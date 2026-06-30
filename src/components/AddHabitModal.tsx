import React, { useState } from 'react';
import { Habit } from '../types/habit';

interface AddHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddHabit: (habit: Omit<Habit, 'id'>) => void;
}

const AddHabitModal: React.FC<AddHabitModalProps> = ({ isOpen, onClose, onAddHabit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: 'green',
    icon: '🌱',
    targetStreak: 7,
  });

  const colorOptions = [
    { value: 'red', label: '红色', icon: '🌹' },
    { value: 'blue', label: '蓝色', icon: '🌊' },
    { value: 'green', label: '绿色', icon: '🌿' },
    { value: 'yellow', label: '黄色', icon: '🌻' },
    { value: 'purple', label: '紫色', icon: '🌸' },
    { value: 'orange', label: '橙色', icon: '🍊' },
    { value: 'pink', label: '粉色', icon: '🌺' },
    { value: 'white', label: '白色', icon: '🌼' },
  ];

  const iconOptions = [
    '🌱', '🌿', '🍃', '🌳', '🌺', '🌸', '🌹', '🌻',
    '🍎', '🍊', '🍋', '🍇', '🍓', '🥕', '🥦', '🍅',
    '💧', '🔥', '⚡', '🎯', '📚', '💪', '🏃', '🧘',
    '🎵', '🎨', '📝', '💻', '🔧', '🛠️', '🎮', '🎲'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('请输入习惯名称');
      return;
    }

    onAddHabit({
      name: formData.name.trim(),
      description: formData.description.trim(),
      color: formData.color,
      icon: formData.icon,
      streak: 0,
      completed: false,
      createdAt: new Date(),
      targetStreak: formData.targetStreak,
      progress: 0,
    });

    // Reset form
    setFormData({
      name: '',
      description: '',
      color: 'green',
      icon: '🌱',
      targetStreak: 7,
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">添加新习惯</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              习惯名称 *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="例如：每天阅读30分钟"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              习惯描述
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="描述这个习惯的具体内容..."
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              花园颜色
            </label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setFormData({...formData, color: color.value, icon: color.icon})}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    formData.color === color.value
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl">{color.icon}</div>
                  <div className="text-xs mt-1">{color.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              选择图标
            </label>
            <div className="grid grid-cols-8 gap-2">
              {iconOptions.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({...formData, icon})}
                  className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                    formData.icon === icon
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl">{icon}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              目标连击数
            </label>
            <input
              type="number"
              min="1"
              max="365"
              value={formData.targetStreak}
              onChange={(e) => setFormData({...formData, targetStreak: parseInt(e.target.value) || 7})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              添加习惯
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitModal;