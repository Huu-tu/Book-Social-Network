import socketio from "socket.io-client";
import React from "react";

export const socket = socketio.connect("http://localhost:4000");
export const SocketContext = React.createContext();
