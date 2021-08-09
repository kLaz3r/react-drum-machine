import classes from './App.module.scss';
import DrumMachine from './containers/DrumMachine/DrumMachine';

function App() {
  return (
    <div className={classes.App}>
      <h1>Le Drum Machine</h1>
      <div className={classes.BottomLine}></div>
      <DrumMachine />
      <small>by stefan</small>
    </div>
  );
}

export default App;
