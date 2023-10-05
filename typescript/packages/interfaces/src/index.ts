//
// Represents an item in the todo list.
//
export interface ITodoItem {
    //
    // The text of the todo item.
    //
    text: string;
}

//
// Payload to the REST API HTTP POST /todo.
//
export interface IAddTodoPayload {
    //
    // The todo item to be added to the list.
    //
    todoItem: ITodoItem;
}

//
// Response from the REST API GET /todos.
//
export interface IGetTodosResponse {
    //
    // The todo list that was retreived.
    //
    todoList: ITodoItem[];
}
