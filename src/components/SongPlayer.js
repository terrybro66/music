import React from 'react';
import * as Tone from 'tone';

const SongPlayer = () => {
  const notes = [
    { note: 'C4', duration: '4n' },
    { note: 'E4', duration: '8n' },
    { note: 'G4', duration: '16n' },
    { note: 'B4', duration: '2n' },
  ];
  
  const playNotes = async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
  
    let time = Tone.now();
    notes.forEach(note => {
      Tone.Transport.schedule(() => {
        synth.triggerAttackRelease(note.note, note.duration);
      }, time);
      time += Tone.Time(note.duration).toSeconds();
    });
  
    Tone.Transport.start();
  };
  

  return (
    <button onClick={playNotes}>Play Notes</button>
  );
};

export default SongPlayer;
