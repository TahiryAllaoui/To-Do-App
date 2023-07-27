import { ChangeEvent, useState } from 'react';
import '../style/ToDo.scss'

const ToDo = ({ toDoInput }: { toDoInput: string }) => {

    return (
        <div className="to-do-input">
            <input type="checkbox" name='todo' id='todo' />
            <label htmlFor='todo'>{toDoInput}</label>
        </div>
    );
};

export default ToDo;