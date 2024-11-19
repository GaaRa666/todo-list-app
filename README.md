# To-Do List Application

## **Описание**

Это небольшое React-приложение для работы со списком задач. Пользователи могут:
- Добавлять задачи.
- Просматривать список задач.
- Удалять задачи.
- Отмечать задачи как выполненные.

Данные хранятся на сервере, реализованном с использованием Nest.js, а также сохраняются в `localStorage` для доступности между перезагрузками страницы.

---

## **Функционал**

1. **Добавление задач:**
   - Пользователь может добавлять новые задачи через поле ввода и кнопку "Add".

2. **Просмотр списка:**
   - Список задач отображается с текстом, чекбоксом для выполнения и кнопкой "Delete".

3. **Удаление задач:**
   - Пользователь может удалять задачи с помощью кнопки "Delete".

4. **Отметка задач как выполненных:**
   - Каждую задачу можно отметить как выполненную, используя чекбокс.

5. **Сообщение при отсутствии задач:**
   - Если задач нет, отображается сообщение: `"No tasks to display"`.

6. **Хранение данных:**
   - Данные сохраняются на сервере (Nest.js) и в `localStorage`.

---

## **Технологии**

- **Frontend:** React.js, Axios
- **Backend:** Nest.js, TypeORM, SQLite (или в памяти)
- **CSS:** Встроенные стили для упрощённого оформления

---

## **Настройка и запуск**

### **1. Клонирование репозитория**
Склонируйте репозиторий на ваш компьютер.

---

### **2. Настройка бэкенда**
Перейдите в папку бэкенда:
```bash
cd todo-backend
```

Установите зависимости:
```bash
npm install
```

Запустите сервер:
```bash
npm run start
```

Сервер будет доступен по адресу:
```
http://localhost:3001
```

---

### **3. Настройка фронтенда**
Перейдите в папку фронтенда:
```bash
cd todo-app
```

Установите зависимости:
```bash
npm install
```

Запустите приложение:
```bash
npm start
```

---

## **Проверка функционала**

1. Перейдите на `http://localhost:3000`.
2. Добавьте несколько задач, отметьте их как выполненные, удалите задачи.
3. Перезагрузите страницу, чтобы проверить загрузку из `localStorage`.
4. Убедитесь, что задачи сохраняются на сервере и загружаются.

---
