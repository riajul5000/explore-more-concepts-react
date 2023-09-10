import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(10);
    const teamStyle = {
        border: '1px dotted tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}