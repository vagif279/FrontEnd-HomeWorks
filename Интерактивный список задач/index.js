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
        this.tasks.push(task);
    }

    // Удаление задачи по ID
    removeTaskById(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

}