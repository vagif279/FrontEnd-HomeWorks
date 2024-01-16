/* -------------------------------------------------------------------- */
/* Проверка для textarea чтобы он не совпадал с input */
function validateTextarea() {
    const inputText = document.getElementById('title').value;
    const textareaText = document.getElementById('description').value;

    // Если текст в textarea совпадает с текстом в input, очистить textarea
    if (textareaText === inputText) {
        alert('Текст в поле textarea не должен совпадать с текстом в поле input!'); // предупреждение о том что текст не может совпадать
        document.getElementById('description').value = ''; // очищение поля чтобы user ввёл новый текст
    }
}
/* -------------------------------------------------------------------- */


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

    // Метод отображения списка задач
    showTaskList() {
        console.clear();
        console.log('===== Список задач =====');
        if (this.tasks.length === 0) {
            console.log('Список задач пуст.');
        } else {this.tasks.forEach((task) => {
            console.log(`ID: ${task.id}`);
            console.log(`Название: ${task.title}`);
            console.log(`Описание: ${task.description}`);
            console.log(`Дата создания: ${task.creationDate}`);
            console.log(`Статус выполненности: ${task.completed ? 'Выполнено' : 'Не выполнено'}`);
            console.log('------------------------');
            });
        }
    }

    // Метод сохранения задач в localStorage
    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    // Метод загрузки задач из localStorage
    loadFromLocalStorage() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    // Метод отображения формы добавления задачи
    showAddTaskForm() {
        const title = prompt('Введите название задачи:');
        const description = prompt('Введите описание задачи:');
        this.addTask(title, description);
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



const addTaskForm = document.getElementById('addTaskForm');
const taskListContainer = document.getElementById('taskList');

const taskList = new TaskList();
taskList.loadFromLocalStorage();
taskList.showTaskList();

// Функция для обновления отображения списка задач
function updateTaskList() {
    taskListContainer.innerHTML = ''; // очищаем текущий список задач
  
    // Создание HTML-элемента для каждой задачи (на самом сайте)
    taskList.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="toggleTaskStatus('${task.id}')">
            <span>${task.title}</span>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
            `;
        taskListContainer.appendChild(taskItem);
    });
}

// Функция для обработки события отправки формы добавления задачи
addTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Получение значения из формы
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
  
    // Создание новой задачи
    const newTask = new Task(
        Date.now().toString(),
        title,
        description,
        new Date().toLocaleString(),
        false,
    );

    // Добавление задачи в общий список
    taskList.addTask(newTask);

    // Очистка формы для дальнейшего использования
    addTaskForm.reset();

    // Обновление отображения списка задач, иначе наша задача не появится
    updateTaskList(); 
});

// Функция для изменения статуса выполненности задачи
function toggleTaskStatus(taskId) {
    taskList.toggleTaskStatus(taskId);
    updateTaskList();
}

// Функция для редактирования задачи
function editTask(taskId) {
    const task = taskList.getTaskById(taskId);

    // Проверка, есть ли такая задача, если есть то попросить новые данные
    if (task) {
        const newTitle = prompt('Введите новое название задачи:');
        const newDescription = prompt('Введите новое описание задачи:');
        const newEditedTask = new Task(
            Date.now().toString(),
            newTitle,
            newDescription,
            new Date().toLocaleString(),
            false,
        )
        taskList.editTask(taskIdToEdit, newEditedTask);
        console.log('Edit task:', task);
    }
}

// Функция для удаления задачи
function deleteTask(taskId) {
    taskList.removeTaskById(taskId);
    updateTaskList();
}


// Пример работы с пользовательским интерфейсом

// Функция для отображения списка задач в консоли
function displayTasks(tasks) {
    tasks.forEach((task) => {
      console.log(`ID: ${task.id}, Название: ${task.title}, Статус: ${task.isCompleted ? 'Выполнено' : 'Не выполнено'}`);
    });
}
