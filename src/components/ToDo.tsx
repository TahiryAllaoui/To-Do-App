import '../style/ToDo.scss'

const ToDo = ({ toDoInput }: { toDoInput: string }) => {
    return (
        <div className='to-do-content'>
            <div className="to-do-item">
                <input type="checkbox" />
                <p>{toDoInput}</p>
            </div>
            <div className="delet-button">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default ToDo;