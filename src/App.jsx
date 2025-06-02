import * as Tone from 'tone';
import './App.css'

function App() {
  function playSound() {
    Tone.start().then(() => {
      // create two monophonic synths
      const synthA = new Tone.FMSynth().toDestination();
      const synthB = new Tone.AMSynth().toDestination();
      //play a note every quarter-note
      const loopA = new Tone.Loop((time) => {
        synthA.triggerAttackRelease("C2", "8n", time);
      }, "4n").start(0);
      //play another note every off quarter-note, by starting it "8n"
      const loopB = new Tone.Loop((time) => {
        synthB.triggerAttackRelease("C4", "8n", time);
      }, "4n").start("8n");
      // all loops start when the Transport is started
      Tone.getTransport().start();
      // ramp up to 800 bpm over 10 seconds
      Tone.getTransport().bpm.rampTo(800, 0.1);
    });
  }

  return (
    <>
      <div className="card">
        <button onClick={playSound}>
          sound!!!!!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
