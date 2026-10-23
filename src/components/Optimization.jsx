import {useCallback, useMemo, useState} from 'react'

function Optimization() {
    const [numbers, setNumbers] = useState([11, 2, 3, 4, 5, 6]);
    const evenNumbers = useMome(() => {
        return numbers.filter((number) => number % 2 === 0);
    }, [numbers]);
    const addNumber = useCallback(() => {
        setNumbers((previous) => [...previous,previous.lenght + 1]);
    }, []);
  return (
    <div>
        <h2>ყველა რიცხვი: {numbers.join(",")}</h2>
        <h3>ლუწი რიცხვები: {evenNumbers.join(",")}</h3>
        <button onClick={addNumber}>Addnumber</button>
    </div>
  )
}

export default Optimization