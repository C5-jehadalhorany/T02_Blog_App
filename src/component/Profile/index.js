import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { users } from "../../redux/reducers/user"
import { setpost } from '../../redux/reducers/post';
import { setislog, setislogout, setisname, getinfomation, updatein } from "../../redux/reducers/login"

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const ProFileForUser = () => {
    const dispatch = useDispatch()

    const [userp, setP] = useState([])

    const [namepro, setNamepro] = useState("")
    const [userpro, setUserpro] = useState("")
    const [uspho, setpho] = useState("")
    // const [name, setName] = useState();


    const { userId, login, username, post, profile } = useSelector((state) => {
        return {
            userId: state.login.userId,
            login: state.login.login,
            user: state.user.user,
            post: state.post.post,
            profile: state.login.profile,
            username: state.login.username
        };
    });


    const profileforuser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}
        `).then((result) => {
            // console.log(result.data);
            dispatch(getinfomation(result.data))

        }).catch((err) => {
            console.log(err);
        })
    }


    const updateInformation = () => {
        dispatch(updatein({ name: namepro, username: userpro, phone: uspho, }))
    }


    useEffect(() => {
        profileforuser()

    }, [])

    console.log(profile);
    return <div className='profile container '>





        <br></br>
        <br></br>
        <p>{namepro} </p>
        <input className='aw container' v-model="message" placeholder={profile.name} onChange={(e) => {
            setNamepro(e.target.value)

        }} />
        <hr></hr>
        <br></br>
        <p>{userpro} </p>
        <input className='aw container' v-model="message" placeholder={profile.username} onChange={(e) => {
            setUserpro(e.target.value)

        }} />

        <hr></hr>
        <br></br>

        <p>{uspho} </p>
        <input className='aw container ' v-model="message" placeholder={profile.phone} onChange={(e) => {
            setpho(e.target.value)

        }} />


        <br></br>
        <Button variant="primary container" onClick={() => {
            updateInformation()
        }}>
            updateInformation
        </Button>


    </div>

}




export default ProFileForUser