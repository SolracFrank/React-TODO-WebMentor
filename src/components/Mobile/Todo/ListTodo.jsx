/* eslint-disable react/prop-types */
import Todo from "./Todo";
// eslint-disable-next-line no-unused-vars
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const ListTodo = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <DragDropContext>
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
                                    <div ref={draggableProvider.innerRef}
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}>
                                        <Todo
                                            todo={todo}
                                            updateTodo={updateTodo}
                                            deleteTodo={deleteTodo}
                                        />{" "}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
export default ListTodo;
