import React ,{useEffect,useState}from "react";


const GetCurrentGoals=()=>{
    const API = import.meta.env.VITE_BASE_KEY;
    const [goals,setGoals]=useState([])

    useEffect(() => {
        const fetchGoals = async () => {
          try {
            const response = await fetch(`${API}/goals`);
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
            const data = await response.json();
            setGoals(data);
            // console.log(goals);
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
        fetchGoals();
      }, []);




    return (<>

    <div id="current">

    {goals
              .filter((goal) => goal.userprofile_id === 1)
              .map((goal, goalIndex) => (
                <p  key={goalIndex}><h6>📊{goal.description}</h6></p>
              ))}

 

    </div>


    
    
    
    
    </>)
}


export default GetCurrentGoals