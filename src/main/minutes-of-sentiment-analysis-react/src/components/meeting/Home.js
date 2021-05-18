import React from "react";
import connection from "./RtcConnection";
import { Link } from "react-router-dom";

function Home() {
  const staticId = "qweasd";

  const openOrJoin = () => {
    connection.openOrJoin(staticId);
  };

  const justOpen = () => {
    connection.open(staticId, function (isRoomOpened, roomid, error) {
      if (isRoomOpened === true) {
      } else {
        if (error === "Room not available") {
          alert("이미 존재하는 방입니다. 새로운 방을 만들거나 참가하세요!");

          // closeSocket();
          return;
        }
        alert(error + "error log");
      }
    });
  };

  const justJoin = () => {
    connection.join(staticId, function (isJoinedRoom, roomid, error) {
      if (error) {
        if (error === "Room not available") {
          alert("존재하지 않는 방입니다. 새로운 방을 만들거나 참가하세요!");
          // ------------------------ closeSocket ----------------------
          // closeSocket();
          return;
        }
        alert(error + "error log");
      }
    });
  };

  return (
    <div>
      <Link to={`/room/${staticId}`}>
        <button className="btn" onClick={() => openOrJoin()}>
          OpenOrJoin
        </button>
      </Link>
      <Link to={`/room/${staticId}`}>
        <button className="btn" onClick={() => justOpen()}>
          JustOpen
        </button>
      </Link>
      <Link to={`/room/${staticId}`}>
        <button className="btn" onClick={() => justJoin()}>
          JustJoin
        </button>
      </Link>
    </div>
  );
}

export default Home;
