import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';


const Navbars = () => {
    const [allpost, setAllpost] = useState([]);



    const post = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts
        `).then((result) => {
            // console.log(result.data);
            setAllpost(result.data)
        }).catch((err) => {
            console.log(err);
        })


    }

    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">User</Navbar.Brand>
                <Navbar.Brand href="post" onClick={() => {
                    post()
                }}>post</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Exampel</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}


export default Navbars







