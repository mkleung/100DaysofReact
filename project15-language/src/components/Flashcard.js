import React, { useState, useReducer, useContext } from "react";

const Context = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "increment":
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { english: action.english, spanish: action.spanish }
        ],
        todoCount: state.todoCount + 1
      };
    // case "toggle-todo":
    //   return {
    //     todos: state.todos.map((item, index) =>
    //       index === action.index
    //         ? { ...item, completed: !item.completed }
    //         : item
    //     )
    //   };
    default:
      return state;
  }
}

const TodosApp = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [english, setEnglish] = useState();
  const [spanish, setSpanish] = useState();

  // bad
  let numCompleted = 0;
  todos.map(item => (item.completed ? numCompleted++ : numCompleted));

  return (
    <Context.Provider value={dispatch}>
      <h1>Language Learning</h1>
      <h2>Remember Words using Giphy</h2>
      <div>Number of complete: {numCompleted}</div>
      <br />
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("submit");
          dispatch({ type: "add-todo", english, spanish });
          setEnglish("");
          setSpanish("");
        }}
      >
        <input
          value={english}
          onChange={e => setEnglish(e.target.value)}
          placeholder="Add English"
          required
        />
        <input
          value={spanish}
          onChange={e => setSpanish(e.target.value)}
          placeholder="Add Spanish"
          required
        />
        <input type="submit" />
        <Todoslist todos={todos} />
      </form>
    </Context.Provider>
  );
};

const Todoslist = ({ todos }) => {
  const dispatch = useContext(Context);
  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div
            key={item.english}
            onClick={() => dispatch({ type: "toggle-todo", index })}
            style={{
              textDecoration: item.completed ? "line-through" : ""
            }}
          >
            {item.english} - {item.spanish}
          </div>
        );
      })}
    </div>
  );
};

export default TodosApp;
