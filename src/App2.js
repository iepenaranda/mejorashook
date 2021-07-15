import React, { Children, useEffect, useState, useMemo } from "react";
import "./App.css";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children }) {
  // const [val, set] = useState("");
  // const [frase, setFrase] = useState("frase de ejemplo");

  // const createFrase = () => {
  //   setFrase(val);
  //   set("");
  //   if ( "a" === "a" ) {
  //     console.log("entro en el if");
  //   }
  // }
  // useEffect(() => console.log(`Escribiendo valor: ${val} : ${frase}`), [val, frase])
  // useEffect(() => console.log(`Frase enviada: ${frase}`), [frase])
  useAnyKeyToRender();
  // const words = children.split(" ");
  const words = useMemo(() => children.split(" "), [children]);
  useEffect(() => console.log("Se ejecuta useEffect "), [words]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>

      {/* <label>Mi frase favorita </label>
      <input 
        type="text"
        value = {val}
        placeholder = {frase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createFrase}>Enviar frase</button>
      {val ? "checked" : "not checked"} */}
    </>
  );
}

export default function App() {
  return <WordCount>Un texto cualquiera</WordCount>;
}
