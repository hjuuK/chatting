const Header = ({title, value}) => {
    //const { title : _title } = props; // { title(속성명) : "내용"(변수명) }
    //const { title } = props; // { title : title }
    return (
        <header>
            <h1>{title}</h1>
            <h2>{value}</h2>
        </header>
    );
};

export default Header;