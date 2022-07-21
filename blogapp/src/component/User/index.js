import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { users } from "../../redux/reducers/user"
import { setpost } from '../../redux/reducers/post';


const User = () => {
    const dispatch = useDispatch()

    const [userp, setP] = useState([])
    const [profile, setProfile] = useState([])

    const { userId, login, user, post } = useSelector((state) => {
        return {
            userId: state.login.userId,
            login: state.login.login,
            user: state.user.user,
            post: state.post.post
        };
    });

    let conter2 = user.length
    let conter = post.length

    const userprofil = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums`).then((result) => {
            setProfile(result.data)
            // console.log(result.data); object
        }).catch((err) => {
            console.log(err);
        })
    }

    const userRen = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {

            dispatch(users(result.data))
        }).catch((err) => {
            console.log(err);
        })
    }

    const userpost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
            dispatch(setpost(result.data.reverse()))

            // console.log(result.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        userRen()
        userprofil()
        userpost()
    }, [])

    return (<div>
        {user && user.map((element, index) => {
            // conuterforpost = 0
            // conuterforprofile=0
            return <div key={element.id}>
                <div key={element.id}>
                    <tr>
                        <th>{element.username}</th>
                        <th>{element.username}</th>
                    </tr>
                </div>
            </div>
        })}
        {post && post.map((element) => {
            return <div key={element.id}>
            </div>
        })}
    </div>)

}

export default User