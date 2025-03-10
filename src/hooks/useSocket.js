/* eslint no-restricted-globals: ["error", "event"] */
/* global window */

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

/**
 * @typedef UseSocket
 * @property {Socket|null} socket,
 * @property {boolean} isConnected 
 **/

/**
 * Use web socket
 * 
 * @returns {UseSocket} Web Socket
 **/
export default function useSocket() {
  const [isConnected, setIsConnected] = useState/** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} **/(false);
  const [socket, setSocket] = useState/** @type {[Socket|null, React.Dispatch<React.SetStateAction<Socket>>]} **/(null);

  useEffect(() => {
    if (window.__IO__) {
      setSocket(window.__IO__);
      return;
    }

    window.__IO__ = io();
    setSocket(window.__IO__);

    window.addEventListener('beforeunload', () => {
      window.__IO__?.close();
      console.log('connection closed')
    });
  }, []);

  useEffect(() => {
    setIsConnected(!!socket);
  }, [socket]);

  return /** @type {UseSocket} **/{
    socket,
    isConnected
  }
}
