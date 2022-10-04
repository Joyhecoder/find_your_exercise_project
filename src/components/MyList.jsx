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
      document.body.style = "background: #84a59d"
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
            
              <Card key={exercise.id} style={{ width: '28rem', margin: '1rem' }}>
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
        <div className="exercise-display-container">
          <div className="gif-img-container">
          <img src="https://i0.wp.com/i.pinimg.com/originals/f1/04/ca/f104ca9dc7a7626ca4e587792da17554.gif?w=1140&ssl=1" alt="cat working out" className='img-gif'/>
          </div>
          <div className="myList-text">
          There is currently no exercise added in your list
          </div>
         
          </div>
        }
           
    
        
        </div>
    </>
  )
}

export default MyList