import axios from 'axios';
import { useState } from 'react';




const Login = () => {


    const [islogin, setIslogin] = useState([]);



    const cilcktologin = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
            console.log(result.data);
            setIslogin(result.data)
        }).catch((err) => {
            console.log(err);
        })

    }

    return <div>
        {islogin && islogin.map((element, index) => {
            return (<div>



            </div>

            )
        })}
        <h1>Login</h1>
        <input placeholder="enter Name" type="text" />
        <input placeholder="enter Email" type="text" />
        <button onClick={() => { cilcktologin() }}>Log in</button>
    </div>


}


export default Login