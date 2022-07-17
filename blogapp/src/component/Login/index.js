import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setlogin, setlogout } from "../../redux/reducers/login"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const [islogin, setIslogin] = useState([]);
    const [loginsus, setLoginsus] = useState(false);
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const { setlogin, setlogout } = useSelector((state) => {
        return {

            setlogin: state.logins.logins,
            setlogout: state.logins.logins
        };
    });


    const cilcktologin = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
            if (result.data.includes(name, email)) {
                dispatch(setlogin(true))
                navigate("/");
                
                setIslogin(result.data)
            }

         
            console.log(result.data);

        }).catch((err) => {
            console.log(err);
        })

    }




    // useEffect(() => {
    //     console.log(islogin);
    // }, [console.log(islogin)])

    return <div>
        {islogin && islogin.map((element, index) => {
            return (<div key={element.id}>



            </div>

            )
        })}
        <h1>Login</h1>
        <input placeholder="enter Name" type="text" onChange={(e) => { setName(e.target.value) }} />
        <input placeholder="enter Email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <button onClick={() => { cilcktologin() }}>Log in</button>
    </div>


}


export default Login