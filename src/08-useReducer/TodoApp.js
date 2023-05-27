
import { TodoList } from "./TodoList";
import { OnNewTodo } from "./OnNewTodo";
import { useTodos } from "./useTodos";


export const TodoApp = () => {

    const { deleteTodo, handleTarea, togleTodo, todos } = useTodos([]);

  return (
    <>
        <h1> TodoApp </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos= { todos }  onDeleteTodo ={ deleteTodo } onTogleTodo= { togleTodo } />
            </div>

            <div className="col-5">
                <h4> agregar TODO</h4>
                <hr />
                <OnNewTodo handleTarea ={ handleTarea }  />
            </div>
        </div>
    </>
  )
}
