import { useState } from "react";
import "./App.css";

function App() {
  const [text, setForm] = useState("");
  const [print, setPrint] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setPrint(text.toUpperCase());
    setForm("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setForm(e.target.value);
          }}
          value={text}
        />
        <button type="submit" onClick={handleForm}>
          Отправить
        </button>
      </form>
      <p>{print}</p>
    </>
  );
}

export default App;

// function TextInput {
//   const [text, setText] = useState("")

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Было введено имя: ${text}`);
//   };

//   return(
// 		<form onSubmit={handleSubmit}>
// 	    <input onChange={(e) => setText(e.targetValue)} value={text} />
// 	    <input type='submit' value='Submit' />
// 	  </form>
// 	);
// }
