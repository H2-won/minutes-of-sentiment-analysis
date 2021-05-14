import React, { useState } from 'react';
import Video from '../../Video';
import connection from './RtcConnection';
import localVideoThumbnailsArr from './VideoThumbnailsClass';
import VideoThumbnailsList from './VideoThumbnailsList';

const VideoContainerTest = () => {
  const [mainVideo, setMainVideo] = useState(null);
  const [videoThumbnailsArr, setVideoThumbnailsArr] = useState([]);

  connection.onstream = function (event) {
    console.log('ON STREAM TEST');
    if (event.type === 'local') {
      console.log(
        localVideoThumbnailsArr.get(),
        'ON STREAM - ADD LOCAL STREAM',
      );

      setMainVideo(event);
    } else if (event.type === 'remote') {
      localVideoThumbnailsArr.addVideo(
        <Video
          srcObject={event.stream}
          keyvalue={event.streamid}
          id={event.streamid}
          username={event.extra.username}
        />,
      );
      console.log(
        localVideoThumbnailsArr.get(),
        'ON STREAM - ADD REMOTE STREAM',
      );

      setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
    }
  };

  connection.onstreamended = (event) => {
    console.log('ON STREAM END TEST', event);
    if (event.type === 'local') {
      setMainVideo(null);
      localVideoThumbnailsArr.set([]);
      setVideoThumbnailsArr([]);
      console.log('LOCAL STREAM CLOSING. CLOSING ALL VIDEOS - TEST');
    }

    if (event.type === 'remote') {
      localVideoThumbnailsArr.findAndRemove(event.streamid);
      setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
      console.log(
        `REMOTE STREAM CLOSING. CLOSING REMOTE STREAM VIDEO - TEST`,
        event,
      );

      notifyRemoteUserLeft(event.extra.username);
    }
  };

  const notifyRemoteUserLeft = (name) => {
    alert(name + ' left.');
  };

  const closeSocket = function () {
    console.log('START CLOSE SOCKET TEST');

    connection.getAllParticipants().forEach(function (pid) {
      console.log('TEST DISCONECT WITH PEERS', pid);
      connection.disconnectWith(pid);
    });

    // stop all local cameras
    connection.attachStreams.forEach(function (localStream) {
      console.log(localStream, 'CLOSE LOCAL STREAM - TEST');
      localStream.stop();
    });

    // last user will have to close the socket
    // connection.closeSocket();
  };

  // room ID.
  const staticId = 'qwe123';

  const openOrJoin = () => {
    console.log('OpenOrJoin!');
    connection.openOrJoin(staticId);
  };
  const handleOpen = () => {
    console.log('Open!');
    connection.open(staticId, function (isRoomOpened, roomid, error) {
      if (isRoomOpened === true) {
      } else {
        if (error === 'Room not available') {
          alert('이미 존재하는 방입니다. 새로운 방을 만들거나 참가하세요!');
          return;
        }
        alert(error);
      }
    });
  };
  const handleJoin = () => {
    console.log('Join!');
    connection.join(staticId, function (isJoinedRoom, roomid, error) {
      if (error) {
        if (error === 'Room not available') {
          alert('존재하지 않는 방입니다. 새로운 방을 만들거나 참가하세요!');
          return;
        }
        alert(error);
      }
    });
  };
  return (
    <div>
      <div id="video-container">
        <div id="main-video">
          {mainVideo && (
            <Video
              srcObject={mainVideo.stream}
              mainvideo="true"
              keyvalue={mainVideo.streamid}
            />
          )}
          {mainVideo && mainVideo.extra.username}
        </div>
        <VideoThumbnailsList videos={videoThumbnailsArr} />
      </div>
      <div className="action-buttons">
        {!mainVideo && (
          <>
            <button className="btn" onClick={() => openOrJoin()}>
              Open of Join
            </button>
            <button className="btn" onClick={() => handleOpen()}>
              Open
            </button>
            <button className="btn" onClick={() => handleJoin()}>
              Join
            </button>
          </>
        )}
        {mainVideo && (
          <>
            <button className="btn" onClick={() => closeSocket()}>
              Close
            </button>

            <button className="btn" onClick={() => openOrJoin()}>
              Open of Join
            </button>
            <button className="btn" onClick={() => handleOpen()}>
              Open
            </button>
            <button className="btn" onClick={() => handleJoin()}>
              Join
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoContainerTest;
