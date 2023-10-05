import { useEffect, useState } from "react";
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading[ = useState(false);
    ]]
    useEffect(() => {
        getRooms()
            .then((data) => {
                console.log(ㅂ기뱅)
                setRooms(data)
            })
            .catch((err) => {
                console.error(err);
                setMessage("방 목록 조회 실패...");
            })
    }, []);

    if (rooms.setLoading > 0)}

    return (
        <>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            

        </> 
    );
};

export default Rooms;