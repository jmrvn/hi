import React from 'react';
import sound from "./assets/kitchie.mp3";

function App() {
  function play() {
    new Audio(sound).play();
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-orange-50 text-4xl font-bold text-center m-4">HELLO!</h1>
      <button className="bg-slate-200 font-bold w-52 h-10 rounded-lg" onClick={play}>
        CLICK ME
      </button>
    </div>
  );
}

export default App;
