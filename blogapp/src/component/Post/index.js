import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



import Form from 'react-bootstrap/Form';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    setpost,
    addPost,
    updatepost,
    deletepost,
} from '../../redux/reducers/post'


const PostForRen = () => {
    const [id, setId] = useState([])
    const [comment, setComment] = useState([])
    const [posteone, setPosteone] = useState([])

    const [inputs, setInputs] = useState("")
    const [inputs2, setInputs2] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);



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

    const CommentForPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then((result) => {
            setComment(result.data)
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
        CommentForPost()

    }, [])



    return (<div className='allpostandcomment' align="center">
        {<> <button className="btn btn-primary" align="center" >AddPost</button></>}
        {post && post.map((element) => {
            return (<div className='postinmap' align="center" key={element.id}>
                <div className="card"  align="center">
                    <div className="card-header" >
                        post   {element.id} userId  {element.userId}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.body}</p>

                        {userId == element.userId && <>

                            <Button variant="primary" onClick={() => {
                                handleShow1()
                                setId(element.id)
                            }}>
                                deletePost
                            </Button>



                            <Button variant="primary" onClick={() => {
                                handleShow()
                                setId(element.id)
                                setInputs(element.title)
                                setInputs2(element.body)
                                
                            }}>
                                updatePost
                            </Button>

                            {/* <Button variant="primary" onClick={() => {
                                handleShow()
                            }} >updatePost</Button> */}
                        </>}


                        {/* this is conment render and if elementid == postid */}
                        {<>
                            {comment && comment.map((commentpo) => {

                                return (element.id == commentpo.postId &&
                                    
                                 <div key={commentpo.id}>

                                    <p>{commentpo.body}</p> 

                                    </div>

                                )
                            })}
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
        {/* this model for delete  */}
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body> you're delete this post in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    // console.log(id);
                    dispatch(deletepost(id))
                    handleClose1()

                }}>
                    delete
                </Button>
            </Modal.Footer>
        </Modal>


        {/* this for update */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>post Eidt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>post name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""

                            onChange={(e) => {
                                setInputs(e.target.value)
                               
                            }}
                            // value={inputs}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>post body</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => { setInputs2(e.target.value)
                                console.log(inputs2);
                                }}
                            // value={inputs2}
                             />

                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    dispatch(updatepost({inputs2:inputs2,inputs:inputs,id:id}))
                    
                    
                    handleClose()
                }}>
                    update
                </Button>
            </Modal.Footer>
        </Modal>


        {/* //{posteone && posteone.map((element, index) => {
            return (<div>
                <button className="btn btn-primary" >deletePost</button>

                <button className="btn btn-primary" >updatePost</button>
            </div>)
        })} */}
    </div>)
}

export default PostForRen;



