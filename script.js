/* =========================================================
   TaskFlow - Task Manager (Vanilla JavaScript)
   Features (Rubric + Creativity):
   - Add tasks
   - Display tasks
   - Mark as completed
   - Delete tasks (creativity)
   - Persist tasks using localStorage (creativity)
   - Filters (All / Active / Completed) (creativity)
   - Stats counter (Total / Completed) (creativity)
   - Clear completed button (creativity)
   - Empty state message when no tasks exist (creativity)
   ========================================================= */

(function() {
    'use strict';

    const STORAGE_KEY = 'taskflow_tasks_v1';
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const totalCount = document.getElementById('totalCount');
    const doneCount = document.getElementById('doneCount');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    const filterButtons = Array.from(document.querySelectorAll('.filters .chip'));

    let tasks = [];
    let filter = 'all';

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    }

    function loadTasks() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            tasks = raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('Failed to load tasks:', e);
            tasks = [];
        }
    }

    function saveTasks() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (e) {
            console.error('Failed to save tasks:', e);
        }
    }

    function addTask(text) {
        if (!text || !text.trim()) return;
        const task = { id: uid(), text: text.trim(), done: false, created: Date.now() };
        tasks.unshift(task);
        saveTasks();
        render();
    }

    function toggleDone(id) {
        tasks = tasks.map(t => (t.id === id ? Object.assign({}, t, { done: !t.done }) : t));
        saveTasks();
        render();
    }

    function deleteTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        render();
    }

    function clearCompleted() {
        tasks = tasks.filter(t => !t.done);
        saveTasks();
        render();
    }

    function setFilter(f) {
        filter = f;
        filterButtons.forEach(b => b.classList.toggle('is-active', b.dataset.filter === f));
        render();
    }

    function getVisibleTasks() {
        if (filter === 'active') return tasks.filter(t => !t.done);
        if (filter === 'completed') return tasks.filter(t => t.done);
        return tasks;
    }

    function updateStats() {
        totalCount.textContent = `Total: ${tasks.length}`;
        doneCount.textContent = `Completed: ${tasks.filter(t => t.done).length}`;
    }

    function render() {
        updateStats();

        const visible = getVisibleTasks();

        if (!tasks.length) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }

        clearCompletedBtn.style.display = tasks.some(t => t.done) ? 'inline-block' : 'none';

        taskList.innerHTML = visible
            .map(
                t => `\n      <li class="task" data-id="${t.id}">\n        <label class="task__label">\n          <input class="task__checkbox" type="checkbox" ${t.done ? 'checked' : ''} aria-label="Mark task as done" />\n          <span class="task__text ${t.done ? 'is-done' : ''}">${escapeHtml(t.text)}</span>\n        </label>\n        <button class="delete-btn" aria-label="Delete task">×</button>\n      </li>`
            )
            .join('');
    }

    // Simple escaping to avoid injection when rendering text
    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Event listeners
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
        taskInput.focus();
    });

    taskList.addEventListener('click', function(e) {
        const li = e.target.closest('li[data-id]');
        if (!li) return;
        const id = li.dataset.id;

        if (e.target.classList.contains('task__checkbox')) {
            toggleDone(id);
            return;
        }

        if (e.target.classList.contains('delete-btn')) {
            deleteTask(id);
            return;
        }
    });

    filterButtons.forEach(b => {
        b.addEventListener('click', function() {
            setFilter(b.dataset.filter);
        });
    });

    clearCompletedBtn.addEventListener('click', function() {
        clearCompleted();
    });

    // Initialize
    loadTasks();
    setFilter('all');
    render();
})();