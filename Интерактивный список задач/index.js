// Класс для представления задачи
class Task {
    constructor(id, title, description, createdAt, isCompleted) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.createdAt = createdAt;
      this.isCompleted = isCompleted;
    }
}
  
// Класс для управления списком задач
class TaskList {
    constructor() {
        this.tasks = [];
    }

    // Добавление новой задачи
    addTask(task) {
        this.tasks.push(task); //добавляет в конец
    }

    // Удаление задачи по ID
    removeTaskById(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id); // Если task.id не равен id то вернёт true (оставить в списке tasks), если false - уберёт
    }

    // Получение задачи по ID
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }

    // Обновление задачи
    updateTask(updatedTask) {
        const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
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