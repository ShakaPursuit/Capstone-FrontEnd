import React, { useState,useEffect } from 'react';
import "../App.css"

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const[updateProgress,setUpdateProgress]=useState(0)
  useEffect(() => {
    // Retrieve progress from sessionStorage
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setUpdateProgress(parseInt(savedProgress));
    }
  }, []);
  
  useEffect(() => {
    // Save progress to sessionStorage
   localStorage.setItem('progress', updateProgress.toString());
  }, [updateProgress]);

  const incrementProgress = () => {
    if(progress<=90){

        setProgress(prevProgress => prevProgress + 10);
        setUpdateProgress(progress+10)
    }
    };
    

    
    
    
  return (
    <div id="progress">{updateProgress}%
    <progress id="progress-bar"className="custom-progress"value={progress} max="100"></progress> 
<button id='prog'onClick={incrementProgress}>➕ Progress</button>
    </div>
  );
};

export default Progress;

  