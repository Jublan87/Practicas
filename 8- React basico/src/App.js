import React from 'react';
import './App.css';

/* function HelloWord(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  )
} */

class HelloWord extends React.Component {

  state = {
    show: true
  }

  mostrar = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.text}
          <button onClick={this.mostrar}>Cambiar estado</button>
        </div>
      )
    }else{
      return <h2>No hay elementos <button onClick={this.mostrar}>Cambiar estado</button> </h2>      
    }
    
  }
}

function App() {
  return (
    <div>Esto es un componente: 
      <HelloWord text="Hola Juan" subtitle="Juan"/>
      <HelloWord text="Hola Belu" subtitle="Belu"/>
      <HelloWord text="Hola Male" subtitle="Male"/>
    </div>
  );
}

export default App;
