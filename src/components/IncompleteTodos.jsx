import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onCompleteTodos, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">これからやる事</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onCompleteTodos(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
