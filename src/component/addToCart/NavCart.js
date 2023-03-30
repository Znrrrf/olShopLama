// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import "../../App.css";
import ProductList from './ProductList';
import Cart from './Cart';
import { Button, Stack } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom';
import UserSide  from "./user/userSide"
import UserDesk from "./user/userDesk";



const NavCart = () => {

    

    return (
        <div className='nav-cart'>
            <div>
                <Stack direction='row' spacing={4} align='center'>
                    <Link to="*/product">
                        <Button colorScheme='teal' variant='ghost'>product</Button>
                    </Link>
                    <Link to="*/cart" id="cart">
                        <Button colorScheme='teal' variant='ghost'>cart</Button>
                    </Link>
                    <Link to="*/user/*">
                        <Button colorScheme='teal' variant='ghost'>user</Button>
                    </Link>
                </Stack>
            </div>
            <div>
                <Routes>
                    <Route exact path="*/product" element={<ProductList />} />
                    <Route exact path="*/cart" element={<Cart />} />
                    <Route exact path="*/user/*" element={<UserSide />} />
                    <Route exact path="*/user/*/desk" element={<UserDesk />} />
                </Routes>
            </div>
        </div>

    )
}

export default NavCart;