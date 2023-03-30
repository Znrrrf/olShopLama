import "../../../App.css";
import { Input, Stack, InputGroup, InputLeftElement, Avatar, Button } from '@chakra-ui/react';
import { LockIcon } from "@chakra-ui/icons";
// import UserDesk from "./userDesk";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const UserSide = () => {

    // const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const userLogin = [
        {
            userName: "username",
            password: 123
        }
    ]


    if (localStorage.getItem("user") === undefined || localStorage.getItem("user") === null) {
        localStorage.setItem("user", JSON.stringify(userLogin))
    }

    // const goesTo = () => {
    //     // proses login
    //     history.push('/dashboard');
    // }
    
    // localStorage.clear()
    const handleLogin = () => {
        const username = document.getElementById("username").value;
        console.log(typeof username);
        const password = document.getElementById("password").value;
        console.log(typeof password);

        localStorage.setItem("login", JSON.stringify([{
            username: username,
            password: Number(password)
        }]))

        const log = JSON.parse(localStorage.getItem("login"))

        // console.log(log[0].username);

        const user = JSON.parse(localStorage.getItem("user"));
        const login = user.find((u) => u.userName === log[0].username && u.password === log[0].password);
        if (login) {
            // setLoggedIn(true);
            navigate('*/desk');
        } else {
            alert("Invalid username or password");
        }
    };


    return (
        <div className="user">
                <div className="user-box">
                    <div className="title-user">
                        <h1>Login User</h1>
                    </div>
                    <div className="login-user">
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Avatar size='sm' bg='#0E8388' />}
                                />
                                <Input type='tel' focusBorderColor="#0E8388" placeholder='User Name' width='auto' htmlSize={30}  id="username"/>
                            </InputGroup>

                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='#0E8388'
                                    fontSize='1.2em'
                                    children={<LockIcon />}
                                />
                                <Input type="password" placeholder='Password' focusBorderColor="#0E8388"  id="password"/>
                                {/* <InputRightElement children={<CheckIcon color='#0E8388' />} /> */}
                            </InputGroup>
                            <Button colorScheme='blue' onClick={handleLogin}>login</Button>
                        </Stack>
                    </div>
                </div>
        </div>
    )
}


export default UserSide