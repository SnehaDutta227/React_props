import React from "react";
import Entry from "./Entry";
import emojipedia from "./Emojipedia";


function App(){
  return(
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) =>
{
  return <Entry key={emojiTerm.id}
  emoji ={emojiTerm.emoji}
  name={emojiTerm.name}
  meaning={emojiTerm.meaning}
  />


})}
      </dl>
    

    </div>
    

  );
}
export default App;