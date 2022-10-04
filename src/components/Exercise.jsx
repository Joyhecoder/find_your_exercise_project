import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {storeSearchResult} from '../actions/exerciseActions'
import ModalDetail from './Modal'
import Modal from "react-modal";

const Exercise = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const stateData = useSelector(state => state.exercise)
 

 

  //change the window tab title to the page name
  useEffect(() => {
    document.title ="Find your exercise"
  }, [])
  

  const [exType, setExType] = useState("cardio")
  const [displayData, setDisplayData] = useState(false)
  const [exerciseData, setExerciseData] = useState([])
  console.log(`inside exercise ${exType}`);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(exType);
    console.log(stateData[exType])
    setDisplayData(true)
    setExerciseData(stateData[exType])
    console.log(exerciseData)
  
  
  }


  return (
    <>
    <div className="search-container">
      <h3>Search an Exercise that meets your needs</h3>
      <br />

      <div className="dropdown-container">
        <div>Search by Type: </div>
        <div className="inputSearch">
          <Form.Select aria-label="Default select example" className="search-dropdown" onChange={e=>setExType(e.target.value)}>
          <option value="cardio">Cardio</option>
          <option value="olympicWeightlifting">Olympic weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
          </Form.Select>
        <br />

          <input type="submit" onClick={e=>handleSubmit(e)} />
        </div>

        <div className="muscleImage">
          <img src="/muscle.png" alt="muscle diagram" width={550}/>
        </div>
      </div>
      <br />
    </div>

    {/* display the search result */}
    <div className="displayExercise-container">

    {displayData ? 
      <div className="exercise-display-container">
        
        {exerciseData.map(exercise => {
          return (
            <Card style={{ width: '28rem', margin: '1rem' }}>
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Muscle: {exercise.muscle}</Card.Subtitle>
                <Card.Text>
                  Difficulty: &nbsp;
                  {exercise.difficulty}
                </Card.Text>
                <ModalDetail exercise={exercise} />
              </Card.Body>
            </Card>
          )
        })}
      </div>
      :
      <div className="exercise-display-container">Search for some exercise recommendations</div>}
     
    </div> 


    
    </>
  )
}

export default Exercise