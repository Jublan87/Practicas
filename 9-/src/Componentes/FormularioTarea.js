import React, {Component} from 'react';

export default class FormularioTarea extends Component {

    state = {
        title: "",
        description: ""
    }

    onSubmit = (e) => {        //al ser un solo parametro se puede escribir sin parentesis
        this.props.agregarTarea(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit= {this.onSubmit}>
                <input 
                name="title"
                type="text"
                placeholder="Escribe una tarea..."
                onChange={this.onChange}
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea
                name="description"
                placeholder="Escribe una descripcion..."
                onChange={this.onChange}
                value={this.state.description}/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }
}