import React, { useState } from 'react';

const TodoForm = props => {
    let [id, setId] = useState(Math.floor(Math.random()*100))
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [done, setDone] = useState(false)

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleBody = e => {
        setBody(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.receiveTodo({id, title, body, done})
        setTitle('')
        setBody('')
        setId(Math.floor(Math.random() * 100));
    }

    return (
      <form action="">
        <label>
          Title
          <input type="text" value={title} onChange={handleTitle} />
        </label>
        <label>
          Body
          <input type="text" value={body} onChange={handleBody} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    );
}

export default TodoForm;