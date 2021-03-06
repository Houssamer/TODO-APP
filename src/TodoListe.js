import './TodoListe.css';
import TodoItem from './TodoItem';;

function TodoListe(props) {

    const Todos = props.Liste

    return (
        <div className="liste">
            {Todos.map((Todo, index) => (
                <TodoItem 
                    value={Todo.todo} 
                    itemId={Todo.id} 
                    key={index} 
                    handle={props.Close}
                />
            ))}
        </div>
    )
}

export default TodoListe;