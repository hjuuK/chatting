import { Navigate } from "react-router-dom";

const Join = () => {
    const isLogin = true;
    if (isLogin) {
        return <Navigate to="/" />
    }
    
    return <h1>회원가입</h1>;
};

export default Join;