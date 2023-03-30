import "../App.css"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <div className="main-nav">
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>
                        <Link to="/name/*">AddName</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink >
                        <Link to="/addToCart/*">AddToCart</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                    <BreadcrumbLink href='#'>AddProduct</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>

    )
}

export default MainNav;