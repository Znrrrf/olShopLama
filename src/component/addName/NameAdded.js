import { useEffect, useState } from "react";
import "../../App.css";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const NameAdded = () => {

    const [name, setName] = useState(null)
    // const [value, setValue] = useState(0)

    
    // console.log(name);
    // useEffect(()=> {
    //     setValue((value) => {
    //         let nameList = JSON.parse(localStorage.getItem("name"));
    //         value = nameList.length
    //         console.log(value);
    //     })
    // },[value])



    useEffect(
        () => {
            const nameList = JSON.parse(localStorage.getItem("name"));
            setName((name) => name = nameList.map(
                (el, index) => {
                    return (
                        <Tbody>
                            <Tr>
                                <Td>{index + 1}</Td>
                                <Td>{el}</Td>
                            </Tr>
                        </Tbody>
                    )
                }
            ))
        }, []
    )




    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
            <TableCaption>All name has been added</TableCaption>
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Name</Th>
                    </Tr>
                </Thead>
                {name}
            </Table>
        </TableContainer>
    )
}

export default NameAdded;