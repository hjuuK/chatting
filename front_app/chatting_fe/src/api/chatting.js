import apiRequest from "../lib/apiRequest";

/* 방 목록 */
export const getRooms = () => apiRequest("/rooms");

/* 방 등록 */
export const registerRoom = (form) => apiRequest("/room", "POST", form);

/* 채팅 메세지 기록 */
export const registerMessage = (form) => apiRequest("/message", "POST", form);