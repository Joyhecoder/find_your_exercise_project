import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Exercise from './Exercise';
import {addToList} from '../actions/exerciseActions';
import {useDispatch} from 'react-redux';

const ModalDetail = ({exercise}) => {

  const dispatch = useDispatch()
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      Modal.setAppElement('#root');

      let subtitle
      const [modalIsOpen, setIsOpen] = React.useState(false)
      const openModal = () => {
        setIsOpen(true)
      }
      const afterOpenModal = () => { 
        subtitle.style.color = "#f00";
       }
       const closeModal = () => {
        setIsOpen(false)
       }

       const handleClick = (e) => { 
        console.log(e)
        console.log(e.target.id)
        console.log("i've been clicked");
        dispatch(addToList(exercise))
        }

  return (
    <>
    <div>
      <button className="buttonStyle" onClick={openModal}>Details</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{exercise.name}</h2>
        <div className="detail-container">
            <div className="detail-list-container" >
            <ListGroup variant="flush" className="detail-list">
            <ListGroup.Item>Name: {exercise.name}</ListGroup.Item>
            <ListGroup.Item>Type: {exercise.type}</ListGroup.Item>
            <ListGroup.Item>Difficulty: {exercise.difficulty}</ListGroup.Item>
            <ListGroup.Item>Muscle: {exercise.muscle}</ListGroup.Item>
            <ListGroup.Item>Equipment: {exercise.equipment}</ListGroup.Item>
            </ListGroup>

            <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FJmRQ5iTXKE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>


            <div className="instruction-container" >
            <strong>Instruction:</strong> <br></br>{exercise.instructions} 
            </div>
            
        </div>
        <button onClick={closeModal} className="buttonStyle">close</button>
      
       <button className="buttonStyle" id={exercise.id} onClick={e=>handleClick(e)} > Add to List</button>
      </Modal>
    </div>
    
    
    
    </>
  )
}



export default ModalDetail