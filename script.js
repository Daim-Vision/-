const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (i = 0; i < this.items.length; i++) {
            todoList.print(i)
        }
    },

    add: function (text) {
        let newTask = {
            text: text,
            completed: false
        };
        this.items.unshift(newTask);
    },

    remove: function (index) {
        this.items.splice(index, 1);

    },

    print: function (index) {
        if (this.items[index].completed === true) {
            console.log(`[x] ${this.items[index].text}`);
        }
        else { console.log(`[ ] ${this.items[index].text}`); }
    },

    complete: function (index) {
        this.items[index].completed = true;
    }
}

