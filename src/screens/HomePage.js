import { Box } from "@mui/system";
import { Lane } from "../components/Lane";
import { StatusCard } from "../components/StatusCard";
import { TaskCard } from "../components/TaskCard";
import { DragDropContext } from "react-beautiful-dnd"
import { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";



const styles = {
    lane: {

        minWidth: "300px",
        // backgroundColor: "#ddd"
    }

}

const useStyles = makeStyles({
    Box: {
        display: 'Box',
        BoxTemplateColumns: '1fr 1fr 1fr',
    }

})
export function HomePage() {
    const classes = useStyles();
    const [toDoTasks, setToDoTasks] = useState({ droppableId: "0", tasks: [{ id: "Task 1", draggableId: "1", username: "Surya" }, { id: "Task 2", draggableId: "2", username: "Amal" }] })
    const [inDevTasks, setInDevTasks] = useState({ droppableId: "1", tasks: [{ id: "Task 3", draggableId: "3", username: "Dora" }, { id: "Task 4", draggableId: "4", username: "Eric" }] })

    const [inReviewTasks, setInReviewTasks] = useState({ droppableId: "2", tasks: [{ id: "Task 5", draggableId: "5", username: "Anu" }, { id: "Task 6", draggableId: "6", username: "Aishwarya" }] })

    const [inTestTasks, setInTestTasks] = useState({ droppableId: "3", tasks: [{ id: "Task 7", draggableId: "7", username: "Vimal" }, { id: "Task 8", draggableId: "8", username: "Afrah" }] })

    const [doneTasks, setDoneTasks] = useState({ droppableId: "4", tasks: [{ id: "Task 9", draggableId: "9", username: "Jan" }, { id: "Task 10", draggableId: "10", username: "hello" }, { id: "Task 11", draggableId: "11", username: "Jack" }, { id: "Task 12", draggableId: "12", username: "Sanna" }, { id: "Task 13", draggableId: "13", username: "Lofasi" }, { id: "Task 14", draggableId: "14", username: "jayachandran" }] })

    return (
        <DragDropContext
            onDragEnd={(result) => {
                const idToState = {
                    0: { function: setToDoTasks, obj: toDoTasks },
                    1: { function: setInDevTasks, obj: inDevTasks },
                    2: { function: setInReviewTasks, obj: inReviewTasks },
                    3: { function: setInTestTasks, obj: inTestTasks },
                    4: { function: setDoneTasks, obj: doneTasks }
                }
                console.log("Result", result)

                if (!result?.destination) {
                    return;
                }
                if (result.destination.droppableId) {
                    const destinationDroppableId = result.destination.droppableId;
                    const sourceDroppableId = result.source.droppableId;

                    const sourceIndex = result.source.index;
                    const destinationIndex = result.destination.index;
                    const sourceTasks = Array.from(idToState[sourceDroppableId].obj.tasks)
                    const destinationTasks = Array.from(idToState[destinationDroppableId].obj.tasks)
                    console.log("Source Tasks", sourceTasks)
                    console.log("Destination tasks", destinationTasks)
                    const [movedTask] = sourceTasks.splice(sourceIndex, 1)
                    console.log("Source Task after splicing", sourceTasks)
                    if (sourceDroppableId != destinationDroppableId) {
                        destinationTasks.splice(destinationIndex, 0, movedTask)
                        idToState[destinationDroppableId].function({ ...idToState[destinationDroppableId].obj, tasks: destinationTasks })
                        idToState[sourceDroppableId].function({ ...idToState[sourceDroppableId].obj, tasks: sourceTasks })


                        console.log("final destination", destinationTasks)

                    }
                    else {
                        sourceTasks.splice(destinationIndex, 0, movedTask)
                        idToState[sourceDroppableId].function({ ...idToState[sourceDroppableId].obj, tasks: sourceTasks })
                        console.log("final dsource", sourceTasks)

                    }

                }

            }}
        >
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "60px auto",
                gridTemplateAreas: `'sidebar userprofile'
                                    'sidebar boardDetail'
                                    'sidebar tasks'`,
                marginBottom: 0,
                paddingBottom: 0
            }} >
                <Box sx={{
                    gridArea: "sidebar",
                    background: "purple",
                    maxWidth: '60px',
                    minHeight: '100vh'

                }} >
                    <Typography>This is sidebar</Typography>
                </Box>

                <Box sx={{
                    gridArea: "userprofile",
                }} >
                    <Typography>This is User Profile Section</Typography>
                </Box>

                <Box sx={{
                    gridArea: "boardDetail",

                }} >
                    <Typography>This is Board Detail Section</Typography>
                </Box>


                <Box sx={{
                    gridArea: "tasks",
                    background: "#ddd",
                    padding: "1rem",
                    paddingTop: "2rem"
                }} display="flex" justifyContent={"space-between"} >
                    <Lane style={styles.lane} droppableId={toDoTasks.droppableId}>
                        <StatusCard title="To Do" taskCount={10} />
                        {
                            toDoTasks.tasks.map(({ id, draggableId, username }, index) => {
                                return (
                                    <TaskCard title={id} key={id} content={`${id}-Content`} taskId={id} index={index} draggableId={draggableId} username={username} />
                                )
                            })
                        }
                    </Lane>
                    <Lane style={styles.lane} droppableId={inDevTasks.droppableId}>
                        <StatusCard title="In Development" taskCount={10} />

                        {
                            inDevTasks.tasks.map(({ id, draggableId, username, }, index) => {
                                return (
                                    <TaskCard title={id} key={id} content={`${id}-Content`} taskId={id} index={index} draggableId={draggableId} username={username} />
                                )
                            })
                        }
                    </Lane>
                    <Lane style={styles.lane} droppableId={inReviewTasks.droppableId}>
                        <StatusCard title="Ready For Review" taskCount={10} />
                        {
                            inReviewTasks.tasks.map(({ id, draggableId, username }, index) => {
                                return (
                                    <TaskCard title={id} key={id} content={`${id}-Content`} taskId={id} index={index} draggableId={draggableId} username={username} />
                                )
                            })
                        }
                    </Lane>
                    <Lane style={styles.lane} droppableId={inTestTasks.droppableId}>
                        <StatusCard title="In Testing" taskCount={10} />
                        {
                            inTestTasks.tasks.map(({ id, draggableId, username }, index) => {
                                return (
                                    <TaskCard title={id} key={id} content={`${id}-Content`} taskId={id} index={index} draggableId={draggableId} username={username} />
                                )
                            })
                        }
                    </Lane>
                    <Lane style={styles.lane} droppableId={doneTasks.droppableId}>
                        <StatusCard title="Done" taskCount={10} />
                        {
                            doneTasks.tasks.map(({ id, draggableId, username }, index) => {
                                return (
                                    <TaskCard title={id} key={id} content={`${id}-Content`} taskId={id} index={index} draggableId={draggableId} username={username} />
                                )
                            })
                        }
                    </Lane>
                </Box>
            </Box>
        </DragDropContext >
    )
}