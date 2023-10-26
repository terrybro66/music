import './App.css';
import SongPlayer from './components/SongPlayer';


function App() {

  const song =[
    { type: "note", pitch: "C4", duration: 0.5 },
    { type: "chord", pitches: ["C4", "E4", "G4"], duration: 0.5 },
    { type: "arpeggio", pitches: ["A4", "C5", "E5"], duration: 0.5 },
  ];
 


  return (
    <div className="App">
  <SongPlayer />

    </div>
  );
}

export default App;
