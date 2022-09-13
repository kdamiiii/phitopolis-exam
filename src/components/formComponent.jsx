import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//arr.pop();
//console.log(sorter(arr));

export default class FormComponent extends Component {
    constructor(){
        super();
        this.state = {
            answer:''
        };

        this.handleForm = this.handleForm.bind(this);
    }

    setAnswer(ans){
        this.setState({
            answer:ans
        })
    }

    subtract = (x,y) =>{
        try {
            return Math.abs(parseInt(x) - parseInt(y));
        }
        catch(e) {
            return x;
        }
    }

    compute = (sample) => {
        if(sample.length < 2)
            return 0;
        sample = sample
        .split(',')
        .map(x=>parseInt(x))
        .sort((x,y)=>{return x-y})
        .map((curr, indx, elements)=>{
            return this.subtract(curr,elements[indx+1]);
        })
        sample.pop();
        sample.sort((x,y)=>{
            return x - y;
        })
        return sample.join(', ');
    }

    handleForm(event){
        event.preventDefault();
        let ans = this.compute(event.target.elements.integers.value);
        this.setAnswer(ans);
    }

    render() { 
        return (
        <Container fluid>
            <Header>Input comma separated integers</Header>
            <form onSubmit={this.handleForm}>
                <label>
                    <input type="text" name="integers" />
                </label>
                <button value="Submit">Submit</button>
            </form>
            <h4>{this.state.answer}</h4>
        </Container>
        );
    }
}
 