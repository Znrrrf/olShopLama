import { Button, Stack } from '@chakra-ui/react';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
    Box,
} from '@chakra-ui/react';

const UserDesk = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("login") === undefined || localStorage.getItem("login") === null) {
            navigate('*/cart');
        }
    }, [navigate])


    const logOut = () => {
        localStorage.removeItem("login")
        // setConf(true)
        navigate('*/cart');
    }

    const productList = JSON.parse(localStorage.getItem("product"))
    // localStorage.removeItem("product")
    console.log(productList.length);

    const addToProduct = () => {

        const productList = JSON.parse(localStorage.getItem("product"))
        const name = document.getElementById("name").value
        const image = document.getElementById("src").value
        const price = document.getElementById("price").value

        const arrayPush = {
            name: name,
            price: Number(price),
            src: image,
            qty: 1,
            stock: 10,
            pid: productList.length + 1
        }

        productList.push(arrayPush)

        localStorage.setItem("product",JSON.stringify(productList))

        window.location.reload();

    }
    const index = productList.findIndex((item) => item.pid === 4);
    console.log(index);

    const buttonDel = (event) => {

        if(window.confirm("are you sure want to delete this product?")){
            const productList = JSON.parse(localStorage.getItem("product"));
            const productId = event.target.id;

            const index = productList.findIndex((item) => item.pid === productId);
            productList.splice(index, 1);
            localStorage.setItem("product", JSON.stringify(productList));
            window.location.reload()

        }

    }


    let products = productList.map(
        (el) => {
            return (
                <Tbody>
                    <Tr>
                        <Td>{el.pid}</Td>
                        <Td>{el.name}</Td>
                        <Td>
                            <Box>
                                <Image src={el.src} alt='Dan Abramov' boxSize='100px' />
                            </Box>
                        </Td>
                        <Td>{el.price}</Td>
                        <Td >
                            <Button colorScheme='red' id={el.pid} onClick={(e) => buttonDel(e)}>delete</Button>
                        </Td>
                    </Tr>
                </Tbody>
            )
        }
    )


    return (
        <div className='user-desk'>
            <div>
                <h1>ini user desktop</h1>
            </div>
            <div className='desk-box'>
                <div>
                    <Stack direction='row'>
                        <div className="product-list">
                            <div>
                                <h1>your product</h1>
                            </div>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>ID</Th>
                                            <Th>Product name</Th>
                                            <Th>Image</Th>
                                            <Th >Price</Th>
                                            <Th ></Th>
                                        </Tr>
                                    </Thead>
                                    {products}
                                </Table>
                            </TableContainer>
                        </div>
                        <Stack direction='column'>
                            <div>
                                <h1>Insert your new product</h1>
                            </div>
                            <FormControl >
                                <FormLabel>name item</FormLabel>
                                <Input type='text' width='auto' htmlSize={30} id='name' placeholder='input name product'/> 
                                <FormLabel>source image</FormLabel>
                                <Input type='link' width='auto' htmlSize={30} id='src' placeholder='input link'/>
                                <FormLabel>price</FormLabel>
                                <Input type='number' width='auto' htmlSize={30} id='price' placeholder='input price'/>
                            </FormControl>
                            <Button colorScheme='teal' variant='ghost' onClick={() => addToProduct()}>Insert data</Button>
                        </Stack>
                    </Stack>

                </div>
                <div>
                    <Button colorScheme='teal' variant='ghost' onClick={() => logOut()}>log out</Button>
                </div>
            </div>

        </div>

    )
}

export default UserDesk;