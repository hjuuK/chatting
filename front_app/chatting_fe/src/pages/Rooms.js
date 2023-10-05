import { useMemo, useState } from 'react';

function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    
    return total;
}

const Rooms = () => {
    const [num, setNum] = useState(0);

    const handleChange = (e) => {
        setNum(e.target.value);
    };

    const result = useMemo(() => factorial(num), [num]);

    return (
        <>
            <input type="number" onChange={handleChange} /> = {result}            
        </>
    );
};

export default Rooms;