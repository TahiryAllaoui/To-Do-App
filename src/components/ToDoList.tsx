import '../style/ToDoList.scss'
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos }: { toDos: string[], setToDos: (toDosList: string[]) => void }) => {
    const handleDelete = (index: number) => {
        let deletedItemList: string[] = [...toDos];
        deletedItemList.splice(index, 1);
        setToDos(deletedItemList);
    }

    return (
        <ul className='to-do'>
            {
                toDos.map((toDo, index) =>
                    <li className='to-do-content' key={index} >
                        <ToDo toDoInput={toDo} />
                        <div className="delet-button" >
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>)
            }
        </ul>
    );
};

export default ToDoList;