import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Review extends React.Component {
  //state declaration
  state = {
    like: 0
  }
  //event handler 
  onLike = () => {
    //you have to write pure function here to update state  
    //react offers there is in built pure function, via this we need to write immutable
    //code
    this.setState((prevState) => {
      //return immutable object
      // //way 1:
      // return {
      //   like: prevState.like + 1
      // }
      // //way 2:
      // return Object.assign({}, prevState, { like: prevState.like + 1 })

      //way 3:
      return {
        ...prevState, like: prevState.like + 1
      }
    })
  }

  render() {
    console.log('render is called')
    return <div>
      <h1>Review</h1>
      <h3>Like {this.state.like}</h3>
      <button onClick={this.onLike} >Like</button>
    </div>
  }
}
const App = () => {
  return <Review />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
