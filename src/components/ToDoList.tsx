import '../style/ToDoList.scss'
import ToDo from './ToDo';

const ToDoList = ({ toDos }: { toDos: string[] }) => {

    return (
        <div className="to-do">
            {toDos.map((toDo, index) => {
                console.log(index + 1);
                return <ToDo key={index} toDoInput={toDo} />
            })}
        </div>
    );
};

export default ToDoList;