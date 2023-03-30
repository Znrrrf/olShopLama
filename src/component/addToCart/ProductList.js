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
    Image,
    Button,
    Box,
    useToast
} from '@chakra-ui/react';


const ProductList = () => {


    const toast = useToast();


    let productList = [
        {
            name: "baju",
            price: 300000,
            src: "https://cf.shopee.co.id/file/95b9f8c008674067f25d0b71fd7356ed",
            qty: 1,
            stock: 10,
            pid: 1
        }, {
            name: "sepatu",
            price: 250000,
            src: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/1/19/af3922ec-44ac-4b56-a8c9-5f71a06d6a65.jpg",
            qty: 1,
            stock: 10,
            pid: 2
        }, {
            name: "celana",
            price: 270000,
            src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444602/sub/goods_444602_sub14.jpg?width=750",
            qty: 1,
            stock: 10,
            pid: 3
        }, {
            name: "topi",
            price: 150000,
            src: "https://www.jakartanotebook.com/images/products/103/1020/54441/2/279/cozok-topi-baseball-snapback-wanita-maria-letters-emboss-ha08-black-19.jpg",
            qty: 1,
            stock: 10,
            pid: 4
        }
    ]

    
    // console.log(localStorage.getItem("id"));
    if (localStorage.getItem("product") === undefined || localStorage.getItem("product") === null) {
        localStorage.setItem("product", JSON.stringify(productList))
    }
    
    productList = JSON.parse(localStorage.getItem("product"))

    if (localStorage.getItem("productAdded") === undefined || localStorage.getItem("productAdded") === null) {
        localStorage.setItem("productAdded", "[]")
    }

    if(localStorage.getItem("id") === undefined || localStorage.getItem("id") === null) {
        localStorage.setItem("id", "[]")
    }



    const sendData = (exe, event) => {

        const idCart = JSON.parse(localStorage.getItem("id"))
        const productLists = JSON.parse(localStorage.getItem("product"))
        const idTmp = event.target.id
        const dataProduct = JSON.parse(localStorage.getItem("productAdded"));

        if (exe === "add" && !idCart.includes(idTmp)) {
            idCart.push(idTmp)
            dataProduct.push(productLists[(idTmp) - 1]);
            // console.log(dataProduct);
            localStorage.setItem("id", JSON.stringify(idCart))
            localStorage.setItem("productAdded", JSON.stringify(dataProduct))

            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='green'>
                        Item has been Added
                    </Box>
                ),
            });
        } else {

            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='red'>
                        Can't Add item
                    </Box>
                ),
            });

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
                            <Button colorScheme='blue' id={el.pid} onClick={(e => sendData("add", e))}>Add</Button>
                        </Td>
                    </Tr>
                </Tbody>
            )
        }
    )
    // localStorage.clear()

    return (
        <div className="product-list">
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Product List</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Product Name</Th>
                            <Th>Image</Th>
                            <Th >Price</Th>
                            <Th ></Th>
                        </Tr>
                    </Thead>
                    {products}
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductList;