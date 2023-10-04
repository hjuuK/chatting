//import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../components/commons/ErrorMessage";

const Login = () => {
    //const [count, setCount] = useState(0);
    
    /*
    const [searchParams, setSearchParams ] = useSearchParams();
    const test = searchParams.get('test');
    setSearchParams({t1: 1, t2: 2, t3: 3});
    
    //const isLogin = true;
    //const location = useLocation();
    //console.log(location);
    //location.href="/room";
    
    const navigate = useNavigate();
    if (isLogin) {
        //navigate("/", { replace: true });
        navigate(-1); // history.go(-1)
    }
    */

    const [form, setForm] = useState({
        userId : '',
        userPw : '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        form[e.target.name] = e.target.value;
        setForm({...form});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.userId.trim()) {
            setMessage("아이디를 입력하세요.");
            return;
        }

        if (!form.userPw.trim()) {
            setMessage("비밀번호를 입력하세요.");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="userId" placeholder="아이디" onChange={handleChange} /><br />
            <input type="password" name="userPw" placeholder="비밀번호" onChange={handleChange} /><br />
            { message && <ErrorMessage>{message}</ErrorMessage>}
            <button type="submit">로그인</button>
        </form>
    )
    
};

export default Login;