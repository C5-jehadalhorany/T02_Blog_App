import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    setpost,
    addPost,
    updatePost,
    deletepost,
} from '../../redux/reducers/post'


const PostForRen = () => {
    const [poste, setPoste] = useState([])
    const [posteone, setPosteone] = useState([])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { userId, login } = useSelector((state) => {
        return {
            userId: state.login.userId,
            login: state.login.login,
        };
    });


    const { post } = useSelector((state) => {
        return {
            post: state.post.post
        };
    });

    const dispatch = useDispatch()



    const posts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
            // setPoste(result.data)
            dispatch(setpost(result.data))

        }).catch((err) => {
            console.log(err);
        })
    }

    const handelPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((result) => {
            setPosteone(result.data)
            console.log(result.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    // const deletePost = async (id) => {
    //     try{
    //     await axios.delete(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
    //     dispatch(deletepost(id))
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        posts()
        // handelPost()
        // console.log(deletepost);
    }, [])



    return (<>
        {post && post.map((element) => {
            return (<div key={element.id}>
                <div className="card">
                    <div className="card-header" >
                        post   {element.id} userId  {element.userId}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.body}</p>
                        {userId == element.userId && <>

                            <Button variant="primary" onClick={handleShow}>
                                delete
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <button className="btn btn-primary" onClick={() => {
                                        dispatch(deletepost(element.id))
                                        console.log(element.id)
                                        handleClose()
                                    }} >deletePost</button>
                                </Modal.Footer>
                            </Modal>

                            {/* <button className="btn btn-primary" onClick={() => {
                                dispatch(deletepost(element.id))
                                console.log(element.id)
                            }} >deletePost</button> */}



                            <button className="btn btn-primary" >updatePost</button>
                        </>}


                        {/* {posteone && posteone.map((element, index) => {
                            return (<div key={element.id}>
                             
                            </div>)
                        })} */}

                        {/* {userId ? (<><button className="btn btn-primary" >deletePost</button>

                            <button className="btn btn-primary" >updatePost</button></>) : (<></>)} */}
                        {/* <button className="btn btn-primary" >deletePost</button>

                        <button className="btn btn-primary" >updatePost</button> */}
                    </div>
                </div>

            </div>)
        })}
        {/* //{posteone && posteone.map((element, index) => {
            return (<div>
                <button className="btn btn-primary" >deletePost</button>

                <button className="btn btn-primary" >updatePost</button>
            </div>)
        })} */}
    </>)
}

export default PostForRen