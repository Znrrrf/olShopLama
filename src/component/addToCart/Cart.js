import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react';
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
import { DeleteIcon, CheckCircleIcon } from '@chakra-ui/icons';

const Cart = () => {


    const clearCart = () => {
        if (window.confirm("are you sure want to delete all item?")) {
            localStorage.removeItem("productAdded" && "id")
            localStorage.setItem("id", "[]")
            localStorage.setItem("productAdded", "[]")
            window.location.reload();
        }

    }

    const productAdd = JSON.parse(localStorage.getItem("productAdded"))
    const arrayPriceInit = productAdd.map((el) => el.qty * el.price);
    // console.log(arrayPriceInit);
    const priceInit = arrayPriceInit.reduce((acc, curr) => acc + curr, 0)

    const [price, SetPrice] = useState(priceInit)

    // const [counter, SetCounter] = useState(1)


    // let counter = 1
    const doCal = (cal, event) => {
        const productAdd = JSON.parse(localStorage.getItem("productAdded"))
        const productList = JSON.parse(localStorage.getItem("product"))


        const idtmp = Number(event.target.id)
        // console.log(productAdd[index].qty+=1);
        // console.log(idtmp);
        const product = productList.find(item => item.pid === idtmp);
        // console.log(product);


        const index = productAdd.findIndex(item => item.pid === idtmp);
        const productAd = productAdd.find(item => item.pid === idtmp)

        if (cal === "increment" && product.qty < product.stock) {
            product.qty += 1
            productList.splice((product.pid) - 1, 1, product)
            // console.log(productList);
            localStorage.setItem("product", JSON.stringify(productList))
            // SetCounter((counter) => counter = product.qty)

            productAd.qty += 1
            console.log(productAdd);
            productAdd.splice(index, 1, productAd)
            let resultPrice = productAdd.map((el) => el.price * el.qty)
            SetPrice((price) => price = resultPrice.reduce((acc, curr) => acc + curr, 0))
            localStorage.setItem("productAdded", JSON.stringify(productAdd))
            // console.log(resultPrice);
            // console.log(price);
        } else if (cal === "decrement" && product.qty > 1) {
            product.qty -= 1
            productList.splice((product.pid) - 1, 1, product)
            // console.log(productList);
            localStorage.setItem("product", JSON.stringify(productList))
            // SetCounter((counter) => counter = product.qty)

            productAd.qty -= 1
            console.log(productAdd);
            productAdd.splice(index, 1, productAd)
            let resultPrice = productAdd.map((el) => el.price * el.qty)
            SetPrice((price) => price = resultPrice.reduce((acc, curr) => acc + curr, 0))
            localStorage.setItem("productAdded", JSON.stringify(productAdd))
            // console.log(resultPrice);
            // console.log(price);
        }
    }

    const doDel = (event) => {
        const productAdded = JSON.parse(localStorage.getItem("productAdded"))
        const idtmp = Number(event.target.id)
        let storeId = JSON.parse(localStorage.getItem("id"))
        // console.log(idtmp);
        // const product = productList.find(item => item.pid === idtmp);
        // const productAdd = productAdded.find(item => item.pid === idtmp);
        // console.log(product);

        if (window.confirm("Are you sure you want to delete this item?")) {
            const index = productAdded.findIndex(item => item.pid === idtmp);
            productAdded.splice(index, 1)
            localStorage.setItem("productAdded", JSON.stringify(productAdded))
            // product.qty = 1
            // productList.splice((product.pid) - 1, 1, product)
            // localStorage.setItem("product", JSON.stringify(productList))

            storeId.splice(index, 1)
            localStorage.setItem("id", JSON.stringify(storeId))

            window.location.reload();
        }
    }

    // const [data, setData] = useState(null)

    // setData((data) => data = JSON.parse(localStorage.getItem("productAdded")))


    const buyInit = () => {

        console.log(price);

        if (Number(price) === 0) {
            alert("Add your item first!")
            // window.location.reload();

        } else {

            let priceToPay = prompt(`Rp.${price} is a total price, input your balance!`);
            if (priceToPay === !isNaN) {
                alert("Enter a number");
            } else if (priceToPay > price && Number(price) > 0) {
                const changes = priceToPay - price
                alert(`Thx for your payment, your return is ${changes}`);
                // const productAdd = JSON.parse(localStorage.getItem("productAdded"))
                // const productId = JSON.parse(localStorage.getItem("id"))

                const productAdd = []
                localStorage.setItem("productAdded", JSON.stringify(productAdd))
                localStorage.setItem("id", JSON.stringify(productAdd))
                window.location.reload();

            } else if (Number(priceToPay) === Number(price) && Number(price) > 0) {
                alert(`Thx for your payment`)
                const productAdd = []
                localStorage.setItem("productAdded", JSON.stringify(productAdd))
                localStorage.setItem("id", JSON.stringify(productAdd))
                window.location.reload();

            } else if (priceToPay < price) {
                const changes = price - priceToPay
                alert(`sorry your money is lacking, add more ${changes}`)
            } else if (priceToPay === null) {
                alert('you just canceled a payment')
            }
        }
    }

    let data = productAdd.map(
        (el) => {
            return (
                <Tbody>
                    <Tr>
                        <Td>{el.pid}</Td>
                        <Td>
                            <Box>
                                <Image src={el.src} alt='Dan Abramov' boxSize='100px' />
                            </Box>
                        </Td>
                        <Td>{el.price * el.qty}</Td>
                        <Td >
                            <Stack>
                                <Text>{el.qty}/{el.stock}</Text>
                                <Button colorScheme='green' id={el.pid} onClick={(e) => (doCal("increment", e))}>+</Button>
                                <Button colorScheme='blue' id={el.pid} onClick={(e) => (doCal("decrement", e))}>-</Button>
                                <Button colorScheme='red' id={el.pid} onClick={(e) => doDel(e)}>{<DeleteIcon />}</Button>
                            </Stack>
                        </Td>
                    </Tr>
                </Tbody>
            )
        }
    )



    // localStorage.clear()


    // console.log(data);


    return (
        <div className="cart">
            {/* <div>
                <Button colorScheme='blue' onClick={() => clearCart()}>clear all cart</Button>
            </div> */}

            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Product List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Product</Th>
                                <Th >Total Price</Th>
                                <Th >quantity</Th>
                            </Tr>
                        </Thead>
                        {data}

                    </Table>
                </TableContainer>
                <div>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Td>
                                        <Stack spacing={4} direction='row' align='center'>
                                            <Button colorScheme='green' leftIcon={<CheckCircleIcon />} onClick={() => buyInit()}>Buy all item in the cart</Button>
                                            <Button colorScheme='red' leftIcon={<DeleteIcon />} onClick={() => clearCart()}>clear all cart</Button>
                                        </Stack>
                                    </Td>
                                    <Td>
                                        price {price}
                                    </Td>
                                </Tr>
                            </Thead>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Cart;