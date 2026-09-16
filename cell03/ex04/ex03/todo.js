$(document).ready(function() {
    const saveCookie = () => {
        let tasks = [];
        $('.todo-item').each(function() { tasks.push($(this).text()); });
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))}; path=/`;
    };

    $('#new-btn').click(function() {
        const task = prompt("New task:");
        if (task && task.trim()) {
            const $div = $('<div class="todo-item"></div>').text(task);
            $('#ft_list').prepend($div); 
            saveCookie();
        }
    });

    $('#ft_list').on('click', '.todo-item', function() {
        if (confirm("Remove this?")) {
            $(this).remove();
            saveCookie();
        }
    });
});