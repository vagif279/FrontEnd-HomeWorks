// Класс для представления задачи
class Task {
    constructor(id, title, description, createdAt, isCompleted = false) {
        this.id = crypto.randomUUID(); // уникальное рандомное значение для ID
        this.title = title; // название задачи
        this.description = description; // описание задачи
        this.createdAt = createdAt; // дата создания задачи
        this.isCompleted = isCompleted; // статус выполненности (по дефолту - false)
    }
}
  
// Класс для управления списком задач
class TaskList {
    constructor() {
        this.tasks = []; // массив задач
    }

    // Добавление новой задачи
    addTask(task) {
        this.tasks.push(task); // добавляет задачу в конец
    }

    // Метод для редактирования существующей задачи
    editTask(id, updatedTask) {
        const index = this.tasks.findIndex((task) => task.id === id);

        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }

    // Удаление задачи по ID
    removeTaskById(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id); // Если task.id не равен id то вернёт true (оставить в списке tasks), если false - уберёт
    }

    // Получение задачи по ID
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }

    // Фильтрация задач по статусу выполненности
    filterTasksByStatus(isCompleted) {
        return this.tasks.filter((task) => task.isCompleted === isCompleted);
    }

    // Сортировка задач по названию
    sortTasksByName() {
        this.tasks.sort((a, b) => a.title.localeCompare(b.title)); // -1 если a.title<b.title, 0 если равны и 1 если >
    }

    // Сортировка задач по дате создания
    sortTasksByDate() {
        this.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
}

/* -------------------------------------------------------------------- */
/* Примеры использования */

// // Создание экземпляра списка задач
// const taskList = new TaskList();

// // Пример создания новой задачи и добавление ее в список
// const newTask = new Task('Новая задача', 'Какое-то описание с тектом', '01.01.2023 12:30:00', true);
// taskList.addTask(newTask);

// // Пример редактирования задачи
// const taskIdToEdit = newTask.id;
// const updatedTask = new Task('Обновленная задача', 'Обновленное какое-то описание с тектом', '02.01.2023 15:30:00', true);
// taskList.editTask(taskIdToEdit, updatedTask);

// // Пример удаления задачи
// const taskIdToRemove = newTask.id;
// taskList.removeTaskById(taskIdToRemove);

// // Пример сортировки задач по названию
// taskList.sortTasksByName();

// // Пример сортировки задач по дате
// taskList.sortTasksByDate();

// // Примеры фильтрации по статусу выполненности
// const completedTasks = taskList.filterTasksByStatus(true);
// const incompleteTasks = taskList.filterTasksByStatus(false);
/* -------------------------------------------------------------------- */
