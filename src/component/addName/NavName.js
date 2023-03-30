// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NameList from './NameList';
import NameAdded from './NameAdded';
import { Button, Stack } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom';

const NavName = () => {
    return (
        <div className='nav-name'>
            {/* <Tabs>
                <TabList>
                    <Tab>Name</Tab>
                    <Tab>Name Added</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <NameList />
                    </TabPanel>
                    <TabPanel >
                        <NameAdded />
                    </TabPanel>
                </TabPanels>
            </Tabs> */}
            <div>
                <Stack direction='row' spacing={4} align='center'>
                    <Link to="*/names">
                        <Button colorScheme='teal' variant='ghost'>name</Button>
                    </Link>
                    <Link to="*/nameList">
                        <Button colorScheme='teal' variant='ghost'>name added</Button>
                    </Link>
                </Stack>
            </div>
            <div>
                <Routes>
                    <Route exact path="*/names" element={<NameList />} />
                    <Route exact path="*/nameList" element={<NameAdded />} />
                </Routes>
            </div>

        </div>

    )
}

export default NavName;