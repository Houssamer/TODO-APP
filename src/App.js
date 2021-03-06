import './App.css';
import {useState, useEffect} from 'react'
import TodoInput from './TodoInput';
import TodoListe from './TodoListe';
import Footer from './Footer'
import db from './firebase'
import firebase from 'firebase'
import UpdateTodo from './UpdateTodo'


function App() {

  const [Input, setInput] = useState('')
  const [Todos, setTodos] = useState([])
  const [open, setOpen] = useState(true)
  const [itemId, setItemId] = useState('')
  useEffect(() => {
      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])
  
  function handleChange(e) {

    setInput(e.target.value)

  }

  function handleSubmit(e) {

    e.preventDefault()

    db.collection('todos').add({
      todo: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  function handleUpdate(e) {
    e.preventDefault()
    
    db.collection('todos').doc(itemId).set({
      todo: Input
    }, {merge: true})

    setOpen(!open)
    setInput('')
  }


  function handleClose(item) {

    setOpen(!open)
    setItemId(item)
  }
  



  return (
    <div className="App">
      <UpdateTodo 
        Close={handleClose} 
        input={Input}
        change={handleChange}
        Open={open}
        update={handleUpdate}
      />
      <div style={{opacity: !open ? '1' :' 0.2'}}>
        <h1>TODO-APP</h1>
        <TodoInput  value={Input} onChange={handleChange} onSubmit={handleSubmit} />
        <TodoListe Liste={Todos} Close={handleClose} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
