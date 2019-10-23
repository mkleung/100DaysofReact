import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault();

        // spread = unpack the existing notes from array
        // add the new note
        setNotes([
            ...notes, { title: title, body: body }
        ])
        setTitle('')
        setBody('')     
    }
    
    const removeNote = (title) => {
        setNotes(
            notes.filter((note) => note.title !== title)
        )
    }
    console.log(notes)
    return (
        <div>
            <h1>Notes</h1>
            { notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>x</button>
                </div>
            ))}
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title"></input>
                <textarea value={body} type="textarea" onChange={(e)=>setBody(e.target.value)} placeholder="content"></textarea>
                <button>Add Note</button>
            </form>
        </div>
    )
}


// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('');
//     return (
//         <div>
//             <p>The current {text} is {count}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <input  value={text} onChange={(e) => setText(e.target.value)} />
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

