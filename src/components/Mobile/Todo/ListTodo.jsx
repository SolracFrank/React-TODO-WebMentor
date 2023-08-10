/* eslint-disable react/prop-types */
import Todo from "./Todo";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const ListTodo = ({ todos, updateTodo, deleteTodo, SetTodos }) => {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const startIndex = result.source.index;
        const endIndex = result.destination.index;
        const copyTodos = [...todos];
        const [reorderItem] = copyTodos.splice(startIndex, 1);
        copyTodos.splice(endIndex, 0, reorderItem);
        SetTodos(copyTodos);
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(droppableProvider) => (
                    <div
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                    >
                        {todos.map((todo, index) => (
                            <Draggable
                                index={index}
                                key={todo.id}
                                draggableId={`${todo.id}`}
                            >
                                {(draggableProvider) => (
                                    <Todo
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                        todo={todo}
                                        updateTodo={updateTodo}
                                        deleteTodo={deleteTodo}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
export default ListTodo;
