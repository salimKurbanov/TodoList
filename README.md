## Установка и запуск

1. Установите зависимости:

    npm install

2. Запустите проект в режиме разработки:

    npm run dev

---

## Структура проекта

src/
├── components/
│   ├── add_task_btn/
│   ├── button/
│   ├── button_icon/
│   ├── check_box/
│   ├── current_date/
│   ├── head/
│   ├── no_items/
│   ├── textarea/
│   ├── title/
│   ├── todo_form/
│   ├── todo_item/
│   └── todo_list/
├── constants/
├── hooks/
├── icons/
├── store/
├── style/
├── types/
├── utils/
├── App.tsx
└── main.tsx

components/ — UI-компоненты (форма, список, элементы и т.п.)

hooks/ — кастомные хуки

store/ — Zustand store

utils/ — утилиты

---

## Возможности

    - Добавление задач

    - Отображение списка задач

    - Возможность отметить задачу как выполненную (чекбокс)

    - Удаление задач

    - Фильтры: Все / Активные / Выполненные

    - Сохранение задач в localStorage

    - Редактирование текста задачи

    - Подсчёт количества активных задач («Осталось X задач»)
    
---

## Технологии

    - React

    - TypeScript

    - Vite

    - Zustand (управление состоянием с сохранением в localStorage)

    - SCSS (стилизация компонентов)