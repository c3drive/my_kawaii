import React from 'react';
import logo from './logo.svg';
import useSound from 'use-sound';
import './App.css';

function App() {
  const [wediditbaby] = useSound('./we_did_it_baby_becky_20230518_by_KAZZAWARDS2023.ogg', {
    interrupt: true
  });
  const [beccaa] = useSound('./becca_freen_20231108_by_freen_ig_live.ogg', {
    interrupt: true
  });
  const [waaaa] = useSound('./waaaaaaaaa_freen_20231108_by_freen_ig_live.ogg', {
    interrupt: true
  });
  return (
    <div className="App">
      <p></p>
      <br />
      <br />
      <br />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <section>
        <a href="#" className="btn_07" onClick={() => wediditbaby()}>WE DID IT BABY</a><br />
        <a href="#" className="btn_07" onClick={() => beccaa()}>O, BECCAAA</a><br />
        <a href="#" className="btn_07" onClick={() => waaaa()}>WAAAAAA</a><br />
      </section>
    </div>
  );
}

export default App;
