import React, {Component} from "react";
import Course from "./Course";
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = { 
      courses : [
      {
        id: 1,
        name: 'Java',
        desc: 'Curso de java 40 horas',
        img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials-300x200.jpg'
      },
      {
      id: 2,
        name: 'React',
        desc: 'Curso de React 20 horas',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png'
    }
    ]
  }

  this.remove = this.remove.bind(this);
}

remove(courseId){

  const {courses} = this.state;
  const courseIndex = courses.findIndex(course => course.id == courseId);
  courses.splice(courseIndex, 1);
  this.setState({courses});
}

  render(){
    const {state} = this;
    return(
     <div className="App">
      <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove}></Course>)
          }
      </ul>
     </div>
    )
  }
}

export default App;