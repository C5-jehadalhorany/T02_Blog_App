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
    const [inputs3, setInputs3] = useState("")
    const [inputs4, setInputs4] = useState("")

    // this for add 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // this for delete
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //this for add
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //this for comment
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

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

    let conter = post.length + 1

    const dispatch = useDispatch()

    const posts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
            // setPoste(result.data)
            dispatch(setpost(result.data.reverse()))

        }).catch((err) => {
            console.log(err);
        })
    }

    const CommentForPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then((result) => {
            setComment(result.data)
            setInputs3(result.data[499].postId)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        posts()
        CommentForPost()
    }, [])
    return (<div className='allpostandcomment' align="center">
        {<div className='forbutten'>
            <Button variant="primary" onClick={() => {
                handleShow2()
            }}>
                add post :)
            </Button>
        </div>}

        {post && post.map((element) => {
            return (<div className='postinmap container' align="center" key={element.id}>
                <div className="card" align="center">
                    <div className="card-header" >
                        post   {element.id || conter} userId  {element.userId}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.body}</p>
                        <br />
                        <br />
                        <br />
                        {userId == element.userId && <>
                            {/* this button for delete post  */}
                            <Button variant="primary" onClick={() => {
                                handleShow1()
                                setId(element.id)
                            }}>
                                deletePost
                            </Button>
                            {/* this button for update post  */}
                            <Button variant="primary" onClick={() => {
                                handleShow()
                                setId(element.id)
                                setInputs(element.title)
                                setInputs2(element.body)
                            }}>
                                updatePost
                            </Button>
                        </>}


                        {/* this is conment render and if elementid == postid */}
                        {<>
                            {comment && comment.map((commentpo) => {
                                return (element.id == commentpo.postId &&
                                    <div key={commentpo.id}>
                                        CommentForPost {element.id}      ID   {commentpo.id}
                                        <p>{commentpo.body}</p>
                                        {/* if i need the click for show the commit*/}
                                        {/*<Button variant="primary" onClick={() => {
                                            handleShow3()
                                            setInputs3(commentpo.postId)
                                            setInputs4(commentpo.body)
                                        }}>
                                            comment
                                        </Button> */}
                                    </div>
                                )
                            })}
                        </>}
                    </div>
                </div>
            </div>)
        })}


        {/* this model for delete   number 1  */}
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
                    dispatch(deletepost(id))
                    handleClose1()
                }}>
                    delete
                </Button>
            </Modal.Footer>
        </Modal>


        {/* this for update        number 2*/}
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
                            value={inputs}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>post body</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => {
                                setInputs2(e.target.value)
                            }}
                            value={inputs2}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    dispatch(updatepost({ inputs2: inputs2, inputs: inputs, id: id }))
                    handleClose()
                }}>
                    update
                </Button>
            </Modal.Footer>
        </Modal>


        {/* this for add     number 3*/}
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                <Modal.Title>post add</Modal.Title>
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
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>post body</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => {
                                setInputs2(e.target.value)
                                // console.log(inputs2);
                            }}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    dispatch(addPost({ title: inputs, body: inputs2, userId: userId, id: conter }))
                    handleClose2()
                }}>
                    add
                </Button>
            </Modal.Footer>
        </Modal>


        {/* this for comment      number 4*/}
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                <Modal.Title>comment add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>comment body</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => {
                                setInputs4(e.target.value)
                                console.log(inputs4);
                            }}
                            value={inputs4}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    // dispatch(addPost({ inputs2: inputs2, inputs: inputs, id: id, postId: inputs3 }))
                    handleClose3()
                }}>
                    comment show
                </Button>
            </Modal.Footer>
        </Modal>
    </div>)
}

export default PostForRen;



