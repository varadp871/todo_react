import React, { useState, useEffect } from "react";

const ToDoItem = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  return (
    <div className="container">
    
      <div className="input-group mb-3">
        <label htmlFor="title">Enter Title : </label>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="desc">Enter Desc : </label>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="desc"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <button type="button" class="btn btn-outline-warning">
        Submit
      </button>
    </div>
  );
};

export default ToDoItem;
