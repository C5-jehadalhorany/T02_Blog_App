import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setislogout } from "../../redux/reducers/login"

const Navbars = () => {
    const [allpost, setAllpost] = useState([]);
    const [usernames, setUsernames] = useState("");
    const [islogingin, setIslogingin] = useState(false);


    const { userId, login, username } = useSelector((state) => {
        return {
            userId: state.login.userId,
            login: state.login.login,
            username: state.login.username
        };
    });
    const dispatch = useDispatch()


    const userforlogin = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}
        `).then((result) => {
            setUsernames(result.data.username)
            setIslogingin(true)
        }).catch((err) => {
            console.log(err);
        })
    }


    const post = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts
        `).then((result) => {
            // console.log(result.data);
            setAllpost(result.data)
            setIslogingin(true)
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        userforlogin()

    }, [])

    return (<>
        {userId ?

            <Navbar bg="dark" variant="dark">
                <Container fluid>

                    <Navbar.Brand href="user">User</Navbar.Brand>
                    <Navbar.Brand href="post" onClick={() => {
                        post()
                    }}>post</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        (<><Navbar.Brand href="/" onClick={() => {
                            dispatch(setislogout(false))
                        }}> log out</Navbar.Brand>
                            <Navbar.Text>
                                Signed in as: <a href="/profile" >
                                    {username}
                                    {/* {usernames} */}
                                </a>
                            </Navbar.Text>
                        </>) :

                    </Navbar.Collapse>


                </Container>
            </Navbar>
            : (<>
                <Navbar bg="dark" variant="dark">
                    <Container >
                        <Navbar.Text>
                            <a href="/login"  >  login </a>
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </>)
        }
    </>);
}


export default Navbars







