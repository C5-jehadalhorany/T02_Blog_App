import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setislog, setislogout } from "../../redux/reducers/login"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const [islogin, setIslogin] = useState([]);
    const [loginsus, setLoginsus] = useState(false);
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const state = useSelector((state) => {
        return {
            login: state.login.login,
            logout: state.login.logout
        };
    });

    const cilcktologin = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${name}
        `).then((result) => {
            if (result.data[0].email == email) {
                dispatch(setislog(result.data[0].id))
                navigate("/");
                setIslogin(result.data)
            }
        }).catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        cilcktologin()
    }, [])
    return <div>
        <h1>Login</h1>
        <input placeholder="enter UserName" type="text" onChange={(e) => { setName(e.target.value) }} />
        <input placeholder="enter Email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <button onClick={() => { cilcktologin() }}>Log in</button>
    </div>
}


export default Login