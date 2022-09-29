import React, {useState, useEffect}  from 'react'
import { useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {

    const [exercise, setExercise] = useState([])
    const [displayDetail, setDisplayDetail] = useState(false)
    useEffect(() => {
        findMatchingData()
    }, [])
    

    //get the id off from the URL params
    const {exerciseID} = useParams();
    console.log(exerciseID);

    //getting stored data from state
    const exerciseData = useSelector(state => state.exercise)
    console.log(exerciseData)

    const findMatchingData = () =>{
        let matchedData = exerciseData.filter(exerciseObj=>{
            return exerciseObj.id === exerciseID
        })
       console.log(matchedData)
        setExercise(matchedData)
        setDisplayDetail(true)
       

    }
    // console.log(exercise)
    // console.log(exercise[0].name)
  
  return (
    <>
    Details
    {displayDetail ? 
    <div className="detail-container">
    <div className="detail-list-container">

        <ListGroup variant="flush">
            <ListGroup.Item>Name: {exercise[0].name}</ListGroup.Item>
            <ListGroup.Item>Type: {exercise[0].type}</ListGroup.Item>
            <ListGroup.Item>Difficulty: {exercise[0].difficulty}</ListGroup.Item>
            <ListGroup.Item>Muscle: {exercise[0].muscle}</ListGroup.Item>
            <ListGroup.Item>Equipment: {exercise[0].equipment}</ListGroup.Item>
        </ListGroup>

       

    </div>

    <div className="detail-video">
        This is where the video goes
    </div>
    
   
    <div className="instructions_sec">Instructions: {exercise[0].instructions}</div>

    
</div>
:
<div></div>

}
    
    
    </>
  )
}

export default Details