import React, {Component} from 'react';
import Tarea from './Tarea'
import PropTypes from 'prop-types';

class Tareas extends Component {
    render() {
        return this.props.tareas.map(tarea =>
        <Tarea
        tarea={tarea}
        key={tarea.id}
        eliminarTarea={this.props.eliminarTarea}
        estadoTarea={this.props.estadoTarea}
        />)
    }
}

Tareas.propTypes = {    //Aclara que la propiedad tareas tiene q ser de tipo array
    tareas: PropTypes.array.isRequired
}

export default Tareas;