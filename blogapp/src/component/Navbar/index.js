import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setislogout } from "../../redux/reducers/login"

const Navbars = () => {
    const [allpost, setAllpost] = useState([]);
    const [username, setUsername] = useState("");


    const { userId } = useSelector((state) => {
        return {
            userId: state.login.userId

        };
    });
    const dispatch = useDispatch()
    const userforlogin = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}
        `).then((result) => {
            setUsername(result.data.username)
        }).catch((err) => {
            console.log(err);
        })
    }


    const post = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts
        `).then((result) => {
            // console.log(result.data);
            setAllpost(result.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        userforlogin()
    }, [])
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">User</Navbar.Brand>
                <Navbar.Brand href="post" onClick={() => {
                    post()
                }}>post</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/login" >   {username}</a>
                    </Navbar.Text>
                  
                </Navbar.Collapse>
                <Navbar.Brand href="/" onClick={()=>{
                        dispatch(setislogout())
                    }}> log out</Navbar.Brand>
            </Container>
        </Navbar>
    </>);
}


export default Navbars







