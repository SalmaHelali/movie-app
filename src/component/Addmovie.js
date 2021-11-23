import React ,{useState}from 'react'
import{Button,Modal}from 'react-bootstrap'

function Example({movies, setMovies}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title , setTitle]=useState('');
    const [description , setdescription]=useState('')
    const [posterURL , setposterURL]=useState('')
    const [Rate , setRate]=useState(0)
    const Add=()=>setMovies([...movies,{id:Math.random(), title,posterURL, description ,   rate:Rate }])
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type='text' value={title}onChange={(e)=>setTitle(e.target.value)}></input>
              <input type='text'value={description}onChange={(e)=>setdescription(e.target.value)}></input>
              <input type='text'value={posterURL}onChange={(e)=>setposterURL(e.target.value)}></input>
              <input type='text'value={Rate}onChange={(e)=>setRate(e.target.value)}></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Add}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example 