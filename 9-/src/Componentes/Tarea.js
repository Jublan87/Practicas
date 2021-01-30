import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarea extends Component {

    StyleCompleta() {
        return {
            fontSize: '20px',
            color: this.props.tarea.done ? 'gray' : 'black', //condicional de una linea, si cumple condicion gris sino negro
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {tarea} = this.props;

        return <div style={this.StyleCompleta()}>
            Id: {tarea.id} - 
            Titulo: {tarea.title} - 
            Descripcion: {tarea.description} - 
            Listo: {tarea.done}
            <input type='checkbox' onChange={this.props.estadoTarea.bind(this, tarea.id)}/>
            <button style={btnEliminar} onClick={this.props.eliminarTarea.bind(this, tarea.id)}>x</button>
        </div>
    }
}

Tarea.propTypes = {     //Aclara q tarea tiene q ser de tipo objeto
    tarea: PropTypes.object.isRequired
}

const btnEliminar = {
    fontSize: '15px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Tarea;