import { ChangeEvent, useState } from 'react';
import '../style/ToDo.scss'

const ToDo = ({ toDoInput }: { toDoInput: string }) => {

    return (
        <div className="to-do-input">
            {/* <input type="checkbox" name='todo' id='todo' /> */}
            <p>{toDoInput}</p>
        </div>
    );
};

export default ToDo;