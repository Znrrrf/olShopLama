import "../../App.css";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    TableCaption,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

const NameList = () => {



    if(localStorage.getItem("name") === undefined || localStorage.getItem("name") === null) {
        localStorage.setItem("name", "[]")
    }


    // localStorage.clear()
    const sendName = (execution, event) => {
        const nameList = JSON.parse(localStorage.getItem("name"))
        if(execution === "add" && !nameList.includes(event.target.id)) {
            nameList.push(event.target.id)
            console.log(nameList);
            localStorage.setItem("name", JSON.stringify(nameList))
        } else if(execution === "delete" && nameList.includes(event.target.id)) {
            let index = nameList.indexOf(event.target.id)
            nameList.splice(index, 1)
            console.log(nameList);
            localStorage.setItem("name", JSON.stringify(nameList))
        }
    }

    const nameList = ["zeta", "pekora", "nene", "gura", "kaela"]

    const addedName = nameList.map(
        (el, index) => {
            return (

                <Tbody>
                    <Tr>
                        <Td>{index + 1}</Td>
                        <Td>{el}</Td>
                        <Td>
                            <Stack direction='row' spacing={2} align='center'>
                                <Button colorScheme='teal' variant='solid' id={el} onClick={e => sendName("add", e)}>
                                    Add
                                </Button>
                                <Button colorScheme="red" variant='solid' id={el} onClick={e => sendName("delete", e)}>
                                    Delete
                                </Button>
                            </Stack>
                        </Td>
                    </Tr>
                </Tbody>
            )
        }
    )

    return (
        <div className="name-list">
            <TableContainer>
                <Table variant='striped' colorScheme='blackAlpha'>
                <TableCaption>All name to be added/deleted</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Name</Th>
                            <Th>Add/Delete</Th>
                        </Tr>
                    </Thead>
                    
                    {addedName}
                </Table>
            </TableContainer>
        </div>
    )
}

export default NameList;