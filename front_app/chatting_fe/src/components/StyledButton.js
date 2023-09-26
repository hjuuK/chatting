const StyledButton = ({children, onClick}) => {
    
    // const handleClick = () => {
    //     alert("클릭!");
    // };

    return <button onClick={onClick}>{children}</button>
};

export default StyledButton;