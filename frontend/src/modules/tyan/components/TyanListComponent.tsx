import { Grid } from "@mui/material";
import { Tyan } from "../models/Tyan";
import TyanComponent from "./TyanComponent";

interface ITyanList{
    tyans:[Tyan]
}

const TyanListComponent:React.FC<ITyanList> = ({tyans}) => {
    return(
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            {tyans.map((tyan:Tyan) => <Grid item xs={12}>
                <TyanComponent tyan={tyan} key={tyan.id}/>
            </Grid>)}
        </Grid>
    )
}

export default TyanListComponent