import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {storeSearchResult} from '../actions/exerciseActions'

const Exercise = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

 

  //change the window tab title to the page name
  useEffect(() => {
    document.title ="Find your exercise"
  }, [])
  

  const [type, setType] = useState("cardio")
  const [displayData, setDisplayData] = useState(false)
  const [exerciseData, setExerciseData] = useState([])
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a6c84714aamshd7312f736a5f530p1a827bjsn8c619e6200a6',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = await fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${type}`, options)
    let result = await data.json()

    //add id into each data
    let newArr = result.map(resultObj => {
      resultObj.id = uuidv4()
      return resultObj
    })
    dispatch(storeSearchResult(newArr))

  
    setExerciseData(newArr)
    setDisplayData(true)
    console.log(exerciseData)
  
  }

  const handleClick = (id) =>{
    navigate(`/details/${id}`)
  }

  return (
    <>
   
    <div className="search-container">
      <h3>Search an Exercise that meets your needs</h3>
      <br />
    

      <div className="dropdown-container">
        <div>Search by Type: </div>
        <div className="inputSearch">
          <Form.Select aria-label="Default select example" className="search-dropdown" onChange={e=>setType(e.target.value)}>
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
          </Form.Select>
          <br />
          

          {/* <Form.Select aria-label="Default select example" className="search-dropdown">
          <option>Focused Body Part</option>
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
          <option value="adductors">Adductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lowerback">Lowerback</option>
          <option value="middleback">Middleback</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          </Form.Select>
          <br /> */}

          <input type="submit" onClick={e=>handleSubmit(e)} />
        </div>

        <div className="muscleImage">
          <img src="/muscle.png" alt="muscle diagram" width={550}/>
        </div>
      </div>
      <br />
    </div>


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
                <Card.Link href="#" onClick={()=> handleClick(exercise.id)}>More information</Card.Link>
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