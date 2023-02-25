import { useState } from "react";

export default function useInput<Type>(initValue:Type){
    const [value,setValue] = useState(initValue)
    
    function onChange(e:React.SyntheticEvent){
        setValue((e.target as HTMLInputElement).value as Type)
    }

    return {value,onChange}
}