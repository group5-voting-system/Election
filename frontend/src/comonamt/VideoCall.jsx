import { useEffect, useRef } from "react";
import io from "socket.io-client";

const VideoCall = ({ roomId, userId }) => {
  const videoGrid = useRef(null);
  const myVideo = useRef(null);
  const socket = useRef(null);
  const peers = useRef({});

  useEffect(() => {
    socket.current = io("http://localhost:5000");
    myVideo.current.muted = true;

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myVideo.current.srcObject = stream;

        socket.current.emit("join-room", roomId, userId);

        socket.current.on("user-connected", (userId) => {
          connectToNewUser(userId, stream);
        });

        socket.current.on("user-disconnected", (userId) => {
          if (peers.current[userId]) peers.current[userId].close();
        });
      });

    return () => {
      socket.current.disconnect();
    };
  }, [roomId, userId]);

  const connectToNewUser = (userId, stream) => {
    const call = new RTCPeerConnection();
    stream.getTracks().forEach((track) => {
      call.addTrack(track, stream);
    });

    call.ontrack = (event) => {
      const video = document.createElement("video");
      video.srcObject = event.streams[0];
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
      videoGrid.current.append(video);
    };

    peers.current[userId] = call;
  };

  return (
    <div>
      <div ref={videoGrid}></div>
      <video ref={myVideo} autoPlay></video>
    </div>
  );
};

export default VideoCall;
