import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";




export function TaskCard(props) {
    let userLetters = props.username?.[0]
    userLetters = userLetters?.toUpperCase()
    userLetters ||= "UK"
    return (
        <Draggable draggableId={props.draggableId} index={props.index} >
            {provided => (
                <Box sx={{ bgcolor: "white", marginTop: "1em" }} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <Typography variant="h6" element="h6">{props.title}</Typography>
                    <Typography variant="p">{props.content}</Typography>
                    <Typography varaiant="p" align="right">{props.taskId}</Typography>
                    <Box style={{ backgroundColor: "#d3d3d3", padding: "0.25em", justifyContent: "flex-end" }} display="flex">
                        <Avatar alt={userLetters} sx={{ bgcolor: "orange", height: 25, width: 25 }}>{userLetters}</Avatar>
                    </Box>
                </Box>
            )
            }

        </Draggable >)

}