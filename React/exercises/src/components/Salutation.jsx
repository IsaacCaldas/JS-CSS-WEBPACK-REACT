import React, { Component } from "react";

class Salutation extends Component {

  state = {
    type: this.props.type,
    name: this.props.name
  }
  
  constructor(props){
    super(props);
    
    this.setType = this.setType.bind(this);
  }

  setType(e){
    let i = 0
    setInterval(() => {
      this.setState({
        type: ++i
      })
    }, 1000)
  }
  setName(e){
    this.setState({
      name: "Hahaha, static state!"
    });
  }

  render(){
    
    const { type, name } = this.state;
    
    return (

      <div>
        <h1>{type} {name}!</h1>
        <hr />
        <input type="text" placeholder="Type..." value={type}onChange={this.setType} /><br/>
        <input type="text" placeholder="Name..." value={name} onChange={e => this.setName(e)}/>
      </div>

    );
  }

}

export default Salutation;