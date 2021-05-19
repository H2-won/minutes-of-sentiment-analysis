import React from "react";
import styled from "styled-components";

const RemoteVideo = styled.div`
  position: relative;
  width: 40%;
`;

const RemoteUserId = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const VideoThumbnailsList = (props) => {
  console.log(props, "test props");

  return (
    <>
      {props.videos.map((video) => (
        <RemoteVideo key={video.props.id} className="video-thumbnail">
          {video}
          <RemoteUserId>{video.props.username}</RemoteUserId>
        </RemoteVideo>
      ))}
    </>
  );
};

export default React.memo(VideoThumbnailsList);
