import { Box, Button, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
} from '@chakra-ui/react';

const Cart2 = () => {

    const clearCart = () => {
        localStorage.removeItem("productAdded");
        localStorage.removeItem("id");
        setData([]);
    }

    const [data, setData] = useState([]);

    const renderData = () => {
        const productList = JSON.parse(localStorage.getItem("productAdded"));
        const newData = productList.map(
            (el) => {
                return (
                    <Tbody>
                        <Tr>
                            <Td>{el.pid}</Td>
                            <Td>
                                <Box>
                                    <Image src={el.src} alt='Dan Abramov' boxSize='100px'/>
                                </Box>
                            </Td>
                            <Td>{el.price * el.qty}</Td>
                            <Td >
                                <Stack>
                                <Button colorScheme='blue' id={el.qty}>+</Button>
                                <Button colorScheme='blue' id={el} >-</Button>
                                </Stack>
                            </Td>
                        </Tr>
                    </Tbody>
                )
            }
        );
        setData(newData);
    }

    useEffect(()=> {
        renderData();
    }, [data]);

    useEffect(() => {
        renderData();
    }, []);

    return (
        <div className="cart">
            <div>
                <Button colorScheme='blue' onClick={() => clearCart()}>clear cart</Button>
            </div>

            <div>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Product List</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Product ID</Th>
                            <Th>Product</Th>
                            <Th >Total Price</Th>
                            <Th >quantity</Th>
                        </Tr>
                    </Thead>
                    {data}
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Cart2;
