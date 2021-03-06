import React from 'react';

//React lifecycle:
//step1 : Get/load all the default props if any
//step2 : set default state
//step3 : before render methods => componentWillMount()
//step4 : Render JSX
//step5 : after render methods => componentDidMount()


class Life extends React.Component{
    //step1
    
    //step2
    state={
        title : "I m learing react lifecycles"
    }

    //step3
    componentWillMount(){
        console.log('Step3: Before rendering');
    }
    componentWillUpdate(){
        console.log('before component update from state');
    }
    componentDidUpdate(){
        console.log('after component update from state');
    }


    //step4
    render(){
        console.log(this.props);
        return(
            <div>
            {this.state.title}
            <div onClick={()=>{this.setState({title:'New State Data'})}}>
                click
            </div>
            
            </div>

        )
    }
    //step5
    componentDidMount(){
        console.log('step5 : After render');
    }

}
export default Life;