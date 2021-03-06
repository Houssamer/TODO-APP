import './UpdateTodo.css'
import del from './icons/delete.svg'

function UpdateTodo(props) {
    return (

    <div className="updateWindow" style={{display: props.Open ? 'block' : 'none'}}>
        <form className="form-update">
          <img src={del} alt="delete" className="del-img" onClick={props.Close} />
          <h3>Your new Todo</h3>
          <input 
            type="text" 
            value={props.input}
            placeholder=""
            onChange={props.change}
            className="input-update"
          />

          <button type="submit" onClick={props.update} className="button-update">Update</button>
        </form>
      </div>
    )
}

export default UpdateTodo