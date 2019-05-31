window.setTimeout(function() {
    var todos = [];
    var input = prompt("What do you want to do?");

    while (input !== "quit") {
        if (input == "new") {
            var newTodo = prompt("What todo do you want to add?");
            todos.push(newTodo);
        } else if (input == "list") {
            console.log("**************************");
            todos.forEach(function(todo, i, arr) {
                console.log(i + ". " + todo);
            })
            console.log("**************************");
        } else if (input == "delete") {
            var deleteTodo = prompt("Which index do you want to delete?");
            todos.splice(deleteTodo, 1);
            console.log("Index " + deleteTodo + " deleted")
        }
        input = prompt("What do you want to do?");
    }
})