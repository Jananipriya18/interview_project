import { Box } from "@mui/system";
import { Droppable } from "react-beautiful-dnd";
export function Lane(props) {
    return (
        <Droppable droppableId={props.droppableId}>
            {
                (provided) => {
                    const { innerRef } = provided
                    return (<Box style={props.style}
                        {...provided.droppableProps}
                        ref={innerRef}>
                        {props.children}
                        {provided.placeholder}
                    </Box>
                    )
                }
            }

        </Droppable >
    )

}