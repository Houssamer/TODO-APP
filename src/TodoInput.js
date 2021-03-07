import './TodoInput.css';

function TodoInput(props) {


    return (
        <div>
            <form className="form">
                <label htmlFor="todo-input" className="label">Todo :</label>
                <input 
                    type="text"
                    className="todo-input" 
                    value={props.value}
                    placeholder=""
                    onChange={e => props.onChange(e)}
                />
                <button type="submit" className="button-add" onClick={props.onSubmit} disabled={!props.value}>ADD</button>
            </form>
        </div>
    )
}

export default TodoInput;