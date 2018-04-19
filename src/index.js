import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component{
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}
class World extends React.Component{
    render(){
        return(
            <p>World</p>
        )
    }
}
class HelloWorld extends React.Component{
    render(){
        return(
            <section>
                <Hello />
                <World />
            </section>
        )
    }
}
class Student extends React.Component{
    constructor(){
        super();
        this.name = "Juanid Fayyaz";
    }
    render(){
        return(
            <section>
                {this.name}
            </section>
        )
    }
}
ReactDom.render(<Student />,document.getElementById('root'))