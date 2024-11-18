
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC<any> = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
        </Navbar>
    );

}

export default Header