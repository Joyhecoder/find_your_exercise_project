import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadData} from './actions/exerciseActions'
import Carousel from 'react-bootstrap/Carousel';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch()
  const exerciseStateData = useSelector(state  =>  state.exercise)
  useEffect(() => {

    if(exerciseStateData === null || exerciseStateData === undefined){

      console.log('dispatching data');
      dispatch(loadData())
    }
    
  }, [])

    //change the window tab title to the page name
    useEffect(() => {
      document.title ="Home Page"
    }, [])
  
  return (
    <Carousel >
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Have a healthy habit</h3>
          <p>"You’ll never change your life until you change something you do daily. The secret of your success is found in your daily routine." --John C. Maxwell</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>You got this!</h3>
          <p>As a busy person, there will always be days where it’s hard to find time for exercise. It’s not true that quitting lasts forever which is why we all need some motivation quotes to remember to make exercising a priority and stay on track with our fitness goals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Listen to your needs</h3>
          <p>
          "It’s difficult to stay motivated when life gets chaotic. If this happens, remember fitness isn’t everything. Set smaller goals and work hard until you achieve them." --Anon motivational quotes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    
    
  )
}

export default App