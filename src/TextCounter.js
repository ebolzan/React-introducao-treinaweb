import React, {Component} from "react";

class TextCounter extends Component{


    static defaultProps ={
        limit: 15
    }

    constructor(props){
       super(props);
       this.state = {
        totalChars: 0,
        text: ''
       }

       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const tam = event.target.value.length;  
        
        if(tam < this.props.limit)
            if(tam <= 50){
                this.setState(
                    {totalChars:tam,
                    text : event.target.value}
                );
                
               
            }
    }

    render(){
        return (
            <div>
                <h1>Contador de caracteres:</h1>
                <textarea onChange={this.handleChange} value={this.state.text}>                    
                </textarea>
               <div> O numero de caracteres é: {this.state.totalChars} </div> {this.props.limit}
            </div>
        )
    }
}

export default TextCounter;