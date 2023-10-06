import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';
import Title from '../components/commons/Title';

const RoomBox = styled.li`
    box-shadow: 2px 2px 5px #212121;
    padding: 10px 20px;
    border-radius: 5px;
    a {
        display: flex;
        justify-content: space-between;
    }
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
        lis = rooms.map(r => {
        const link = `/room/${r.roomNo}`;
        return (
            <RoomBox key={r.roomNo}>
                <Link to={link}>
                    <div class='left'>{r.roomNm}</div>
                    <div class='rigth'>최대 인원수 : {r.max}명</div>
                </Link>
            </RoomBox>);
        });
    }
    
    return (
        <>
            <form autoComplete="off">
                <input type="text" name="roomNm" placeholder="방이름 입력"></input>
            </form>
           {message && <ErrorMessage>{message}</ErrorMessage>}
           { loading && rooms.length === 0 && <div>로딩중....</div> }
            <Title>방 목록</Title>
           <ul>
                {lis}
            </ul>
        </>
    );
};

export default Rooms;