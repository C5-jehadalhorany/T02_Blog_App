import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { users } from "../../redux/reducers/user"
import { setpost } from '../../redux/reducers/post';
import { setalboms } from '../../redux/reducers/albom';
import Table from 'react-bootstrap/Table';


const User = () => {
    const dispatch = useDispatch()

    const [userp, setP] = useState([])
    const [profile, setProfile] = useState([])

    const { userId, login, user, post, albom } = useSelector((state) => {
        return {
            userId: state.login.userId,
            login: state.login.login,
            user: state.user.user,
            post: state.post.post,
            albom: state.albom.alboms

        };
    });



    let conter2 = user.length
    let conter = post.length

    const userprofil = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then((result) => {
                dispatch(setalboms(result.data));

            })
            .catch((err) => {
                console.log(err);
            });
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

        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        userRen()
        userprofil()
        userpost()
    }, [])

    let conuterforpost = 0
    let conuterforalbom = 0
    // console.log(albom);
    return (<div className='container '>
        < Table striped bordered hover variant="" >
            <thead>
                <tr>
                    <th className='ea  '>#</th>
                    <th className='ea  '>User Name</th>
                    <th className='ea  '>The number of posts</th>
                    <th className='ea  '>The number of albums</th>
                </tr>
            </thead></Table>
        {user && user.map((element, index) => {
            conuterforpost = 0
            conuterforalbom = 0
            return <div key={element.id}>
                <div key={element.id}>
                </div>
                {post && post.map((postele) => {
                    if (postele.userId == element.id) {
                        conuterforpost++
                    }
                })}

                {albom && albom.map((albomele) => {
                    if (albomele.userId == element.id) {
                        conuterforalbom++
                    }
                })}


                {<div>
                    {< Table striped bordered hover variant="table-danger" >
                        <tbody>
                            <tr>
                                <td className='ea'>{element.id}</td>
                                <td className='ea'>{element.username}</td>
                                <td className='ea'>{conuterforpost}</td>
                                <td className='ea'>{conuterforalbom}</td>
                            </tr>
                        </tbody>
                    </Table >}
                </div>}



            </div>
        })}
    </div>)

}

export default User








