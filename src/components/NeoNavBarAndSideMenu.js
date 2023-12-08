import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

//{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//<Nav.Link href="webcamswitchertest">WebCam Testbed (Dev Only)</Nav.Link>
function NeoNavBarAndSideMenu(props) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar-dark bg-dark">
          <Container fluid>
            <Navbar.Brand href="#">Neo SSI PoC</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Neo Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="issuevc">Issue Verifiable Credential</Nav.Link>
                  <Nav.Link href="presentproof">Present Verifiable Credential</Nav.Link>
                  <Nav.Link href="verifyproof">Verify Verifiable Credential</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NeoNavBarAndSideMenu;
