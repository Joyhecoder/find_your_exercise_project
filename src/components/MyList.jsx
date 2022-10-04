import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {deleteFromList} from '../actions/exerciseActions';
import Card from 'react-bootstrap/Card';
import ModalDetail from './Modal'

const MyList = () => {
  const dispatch = useDispatch()
  const myListData = useSelector(state => state.myList)
  console.log(myListData)

    //change the window tab title to the page name
    useEffect(() => {
      document.title ="My List"
    }, [])

  const handleDelete = (e) => {
    console.log(e.target.id);
    dispatch(deleteFromList(e.target.id))
  }
  return (
    <>
       <div className="displayExercise-container">
        
          {myListData.length>0 ? 
           <div className="exercise-display-container">
           {myListData.map(exercise =>{
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
                      <button className="buttonStyle" id={exercise.id} onClick={e=> handleDelete(e)}>Delete</button>
                    </Card.Body>
                  </Card>
            
            )
          
          })}
           </div>
        :
        <div className="exercise-display-container">There is currently no exercise added in your list</div>
        }
           
    
        
        </div>
    </>
  )
}

export default MyList