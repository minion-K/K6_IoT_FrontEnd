//! 사용자로부터 입력받은 할 일을 관리하는 Task Logger
//% Task 저장소의 구조 - 클래스
// : 할 일에 대한 저장소(배열)와 기능 명시
var TaskLogger = /** @class */ (function () {
    function TaskLogger() {
        this.tasks = [];
        // 할 일의 ID 생성을 위한 카운터
        this.taskIdCounter = 0;
    }
    TaskLogger.prototype.addTask = function (description) {
        var newTask = {
            // 현재 카운터 값으로 ID 지정 후 증가
            id: this.taskIdCounter++,
            description: description,
            timeStamp: new Date()
        };
        this.tasks.push(newTask);
        this.renderTasks(); // 할 일 목록을 화면에 재렌더링(다시 출력)
        return newTask;
    };
    TaskLogger.prototype.deleteTask = function (id) {
        // 현재의 tasks 배열을 순회하여 순회되는 요소의 ID와 삭제하고자 하는
        //    , 요소의 id(매개변수값)가 일치하지 않는 요소만
        //    , 새로운 배열에 담아 tasks에 저장
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.renderTasks();
    };
    TaskLogger.prototype.craeteTaskElement = function (task) {
        var taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = "\n      <span>".concat(task.description, " - ").concat(task.timeStamp.toLocaleString(), "</span>\n      <button data-task-id='").concat(task.id, "'>Delete</button> \n    ");
        return taskItem;
    };
    TaskLogger.prototype.renderTasks = function () {
        var _this = this;
        var taskList = document.getElementById('task-list');
        if (taskList) {
            taskList.innerHTML = '';
            this.tasks.forEach(function (task) {
                var taskItem = _this.craeteTaskElement(task);
                taskList.appendChild(taskItem);
            });
            this.addDeleteEventListeners();
        }
    };
    TaskLogger.prototype.addDeleteEventListeners = function () {
        var _this = this;
        var deleteButtons = document.querySelectorAll('.task-item button');
        deleteButtons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                var taskId = parseInt(e.target.dataset.taskId || '0', 10);
                _this.deleteTask(taskId);
            });
        });
    };
    return TaskLogger;
}());
//! 프로젝트 실행 진입점
var init = function () {
    //? TaskManager 인스턴스 생성
    var TaskManager = new TaskLogger();
    var logTaskButton = document.getElementById('log-task-button');
    var taskModal = document.getElementById('task-modal');
    var closeModalButton = document.querySelector('.close');
    var addTaskButton = document.getElementById('add-task-button');
    var taskInput = document.getElementById('task-input');
    if (logTaskButton) {
        logTaskButton.addEventListener('click', function () {
            if (taskModal) {
                taskModal.style.display = 'block';
                taskInput.focus();
            }
        });
    }
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            if (taskModal) {
                taskModal.style.display = 'none';
            }
        });
    }
    window.addEventListener('click', function (e) {
        // 이벤트가 발생된 요소 범위가 modal 내부의 modal-content가 아니라
        //  , 실질적인 taskModal 인 경우
        if (e.target === taskModal) {
            if (taskModal) {
                taskModal.style.display = 'none';
            }
        }
    });
    var handleAddTask = function () {
        var description = taskInput.value;
        if (description && description.trim() !== '') {
            TaskManager.addTask(description.trim());
            taskInput.value = '';
            taskModal.style.display = 'none'; // if 조건문 대신
        }
        else {
            alert('Task Description은 필수입니다. 내용을 입력해주세요.');
        }
    };
    // if 조건문 대신
    addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
};
document.addEventListener('DOMContentLoaded', init);
