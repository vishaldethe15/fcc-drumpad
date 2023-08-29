import { useRef, useState } from "react";
import { bank } from "../data.js";

const App = () => {
  const [display, setDisplay] = useState("");

  document.addEventListener("keydown", (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    if (audio) {
      const parent = audio.parentNode;
      parent.classList.add("active");
      audio.play();

      audio.addEventListener("Ended", () => {
        parent.classList.remove("active");
      });
    }
  });

  return (
    <div className="main-container">
      <main id="drum-machine">
        <section id="display">
          <span className="string">{display}</span>
        </section>
        <section className="buttons-container">
          {bank.map((btn) => {
            const { keyTrigger, id, url } = btn;
            const audio = useRef();
            const playAudio = (e) => {
              audio.current.play();
              setDisplay(id);
            };
            return (
              <button className="drum-pad" id={id} onClick={playAudio}>
                {keyTrigger}
                <audio
                  ref={audio}
                  src={url}
                  className="clip"
                  id={keyTrigger}
                ></audio>
              </button>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default App;
