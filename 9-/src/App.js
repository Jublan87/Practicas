import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import tareas from './Datos ejemplo/tareas.json';

import Tareas from './Componentes/Tareas.js';
import FormularioTarea from './Componentes/FormularioTarea'
import Post from './Componentes/Post'

class App extends React.Component {

  state = {
    tareas: tareas
  }

  agregarTarea = (title, description) => {
    const nuevaTarea = {
      title: title,
      description: description,
      id: this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]  //agrego una nueva tarea a las que ya tenia
    })
  }

  eliminarTarea = id => {
    const newTareas = this.state.tareas.filter(tarea => tarea.id !== id);
    this.setState({tareas: newTareas});
  }

  estadoTarea = id => {
    const newTareas = this.state.tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.done = !tarea.done
      }
      return tarea;
    })
    this.setState({tareas: newTareas});
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/post">Posts</Link>

        <Route exact path="/" render={() => {
          return  <div>
                    <FormularioTarea agregarTarea={this.agregarTarea}/>
                    <Tareas
                      tareas= {this.state.tareas}
                      eliminarTarea={this.eliminarTarea}
                      estadoTarea={this.estadoTarea}
                    />
                  </div>
        }}>
        </Route>
        <Route path="/post" component={Post}/>
      </Router>
      
      
    </div>
  }
}

export default App;
