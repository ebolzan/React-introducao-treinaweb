import React, {Component} from "react";

class NewCourseForm extends Component{

    static defaultProps = {
        onSubmit: () =>{}
    }

    constructor(props){
        super(props);

        this.state = {
            name: '',
            img:'',
            desc: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.img){
            this.props.merda(newCourse);
            this.setState(
                {
                    name: '',
                    img: '',
                 
                }
            )
        }
    }

    handleChange(event){
          
        const {target} = event;
        const {name, value} = target;
        console.log(name, value);

        this.setState({
            [name]: value
        })
    }

    render()
    {
        const {state, props} = this;
        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input name='name' onChange={this.handleChange} value={state.name}  />

                    Imagem:
                    <input name='img' onChange={this.handleChange} value={state.img} />

                    Categoria:                    
                    <select name='desc' onChange={this.handleChange} value={state.desc}>
                        <option value="PHP">PHP</option>
                        <option  value="JAVA">JAVA</option>
                        <option  value="PYTHON">PYTHON</option>

                    </select>
                    <button>Enviar</button>
                </label>
            </form>
        )
    }
}

export default NewCourseForm;