import React, { useState } from "react";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Unesite poruku i pritisnite 'Posalji'"
          autoFocus={true}
        />
        <button>Posalji</button>
      </form>
    </div>
  );
};

export default Input;

