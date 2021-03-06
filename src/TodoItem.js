import './TodoItem.css';
import edit from './icons/edit.svg';
import del from './icons/delete.svg';
import db from './firebase'

function TodoItem(props) {
    const {value, itemId} = props
    const item = itemId


    return (
        <div className="item">
            <img src={edit} alt="edit" className="edit-img" onClick={() => props.handle(item)} />
            <div className="item-content">
                {value}
            </div>
            <img src={del} alt="delete" className="delete-img" onClick={() => db.collection('todos').doc(itemId).delete()} />
        </div>
    )
}

export default TodoItem