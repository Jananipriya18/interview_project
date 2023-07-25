// import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/system";

// const useStyles = makeStyles({
//     statusCard: {
//         fontStyle: "bold",
//         fontWeight: 900

//     }
// })
export function StatusCard(props) {
    // const classes = useStyles()
    return (
        <Box sx={{ minWidth: '300px', border: "1px solid grey", padding: '0.5em', boxshadow: "10px 10px 10px black", borderLeft: "10px solid orange", backgroundColor: 'white' }}> {props.title} {props.taskCount}</Box>
    )
}