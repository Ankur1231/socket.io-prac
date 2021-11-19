import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:8000");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="...Jojo"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room ID"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>

      <Chat socket={socket} userName={userName} room={room} />
    </div>
  );
}

export default App;