import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'




const User = () => {
    const [usershow, setUsershow] = useState([])
    const dispatch = useDispatch()



    const userRen = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
            setUsershow(result.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        userRen()
    }, [])

    return (<div>
        {usershow && usershow.map((element, index) => {
            return (<div>
                <h1>{element.username}</h1>
                <h1>{element.email}</h1>
            </div>)
        })}
    </div>)

}


export default User