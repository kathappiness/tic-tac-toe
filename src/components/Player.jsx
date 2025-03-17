import {useState} from "react";

export default function Player({symbol, name}) {
    const [isEditing, setEditing] = useState(false);
    function handleEditClick(isEditing) {
        setEditing(true);
    }
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required/>;
    }
    return (
        <li>
        <span className="player">
            {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
      </li>
    );
}