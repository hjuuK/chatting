import { useEffect, useState } from "react";
import styled from 'styled-components';
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';

const RoomBox = styled.li`
    box-shadow: 2px 2px 5px #212121;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getRooms()
            .then((res) => {
                console.log(data);
                setRooms(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMessage("방목록 조회 실패...");
                setLoading(false);
            });
    }, []);

    let lis = null;
    if (rooms && rooms.length > 0) {
        lis = rooms.map(r => (<RoomBox key={r.roomNo}>{r.roomNm}</RoomBox>));
    }
    
    return (
        <>
           {message && <ErrorMessage>{message}</ErrorMessage>}
           { loading && rooms.length === 0 && <div>로딩중....</div> }
           <ul>
                {lis}
            </ul>
        </>
    );
};

export default Rooms;