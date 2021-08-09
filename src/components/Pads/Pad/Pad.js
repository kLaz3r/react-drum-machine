import React, { useEffect } from 'react';
import classes from './Pad.module.scss';

const Pad = (props) => {
  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  });
  const playSound = () => {
    const sound = document.getElementById(props.padKey);
    props.setDisplay(props.id);
    sound.play();
  };
  return (
    <div onClick={playSound} id={props.id} className='drum-pad'>
      <button id={props.id} className='drum-pad' className={classes.Pad}>
        {props.padKey}
      </button>
      <audio className='clip' id={props.padKey} src={props.audioClip}></audio>
    </div>
  );
};

export default Pad;
