import { Card } from "@mui/material";
import { Tyan } from "../models/Tyan";
interface ITyan{
    tyan:Tyan
}

const TyanComponent:React.FC<ITyan> = ({tyan}) =>{
    return(
        <Card variant="outlined">
            {tyan.name}
            {tyan.surname}
            {tyan.age}
        </Card>
    )
}

export default TyanComponent