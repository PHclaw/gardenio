# 🌱 习惯花园 (GardenIO)

> 可视化习惯追踪游戏，通过游戏化的方式培养好习惯，看着你的花园茁壮成长！

![GardenIO](https://via.placeholder.com/1200x630/22c55e/ffffff?text=习惯花园)

## ✨ 功能特色

- 🎮 **游戏化体验**: 将习惯追踪变成有趣的养成游戏
- 🌻 **可视化花园**: 5x5花园网格，每个习惯对应一个植物
- 🔥 **连击系统**: 追踪习惯完成连击，激励持续坚持
- 🎨 **个性化定制**: 8种颜色和32种图标可选
- 💾 **本地存储**: 自动保存进度，无需注册登录
- 📱 **响应式设计**: 支持桌面和移动设备

## 🚀 快速开始

### 环境要求

- Node.js 18.0+
- npm 8.0+

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🎯 游戏玩法

1. **添加习惯**: 点击"添加习惯"按钮，输入习惯名称和目标
2. **完成习惯**: 每天完成习惯后点击"完成"按钮
3. **观察成长**: 习惯完成次数越多，花园中的植物生长得越茂盛
4. **解锁成就**: 坚持完成习惯，解锁各种成就

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **状态管理**: React Hooks + localStorage
- **开发工具**: ESLint

## 📁 项目结构

```
gardenio/
├── src/
│   ├── components/          # React 组件
│   │   ├── Header.tsx       # 页面头部
│   │   ├── GardenView.tsx   # 花园视图
│   │   ├── HabitList.tsx    # 习惯列表
│   │   └── AddHabitModal.tsx # 添加习惯弹窗
│   ├── types/              # TypeScript 类型定义
│   │   └── habit.ts        # 习惯相关类型
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── package.json            # 项目配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── README.md              # 项目说明
```

## 🎨 自定义

### 修改主题颜色

在 `tailwind.config.js` 中修改主题配置：

```javascript
theme: {
  extend: {
    colors: {
      // 自定义颜色
      primary: {
        DEFAULT: '#22c55e', // 绿色主题
        foreground: '#ffffff',
      },
    },
  },
}
```

### 添加新的植物类型

在 `GardenView.tsx` 中的 `getPlantTypeByColor` 函数中添加新的颜色映射：

```javascript
const colorMap: Record<string, string> = {
  red: '🌹',
  blue: '🌊',
  green: '🌿',
  // 添加新颜色
  teal: '🌿',
  indigo: '🌸',
};
```

## 📝 开发指南

### 添加新功能

1. 在 `src/types/` 中定义新的 TypeScript 类型
2. 在 `src/components/` 中创建新的 React 组件
3. 在 `src/App.tsx` 中集成新功能

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 使用函数组件和 React Hooks

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 提交规范

- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式化
- refactor: 代码重构
- test: 测试相关
- chore: 构建或工具变动

## 📄 许可证

[MIT License](LICENSE)

## 🌟 致谢

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by PHclaw**