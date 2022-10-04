import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import ModalDetail from './Modal'
import { ToastContainer } from 'react-toastify';

const Exercise = () => {
  // const dispatch = useDispatch()
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

        <div >
          <img src="/muscle.png" alt="muscle diagram" className="muscleImage" />
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
            <Card key={exercise.id} style={{ width: '28rem', margin: '1rem' }}>
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
      <div className="exercise-display-container2">
        <h3 className="title-color-style">Join your Exercise Buddy! Search for Your Exercise</h3>
        
        <div className="gif-img-container">
          <img src="https://i.pinimg.com/originals/43/15/38/431538fe336b95c2f004ba46df917fb4.gif" alt="cat working out" className='img-gif'/>
          <img src="https://i.pinimg.com/originals/10/e6/59/10e6591f0ec9515b71c10af42c3d9d95.gif" alt="cat working out" className='img-gif' />
          <img src="https://i.pinimg.com/originals/ee/d7/71/eed771aeaaa425d9706c9fac5435899a.gif" alt="cat working out" className='img-gif'/>
        </div>
        
        </div>}
       <ToastContainer />
    </div> 
    </>
  )
}

export default Exercise