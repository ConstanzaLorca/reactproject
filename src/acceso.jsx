import React from 'react';


class Acceso extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '', 
                     password: '',
                     show: false
                    };
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.submitInfo = this.submitInfo.bind(this)
      this.correcto = this.correcto.bind(this);
    }

    submitInfo=() =>{
        if (this.state.username == 'max'){
            if(this.state.password == "max"){
            {this.correcto()}
            }
        }
        console.log(this.state.show)
    }

    myChangeHandler = (event) => {
        const {id,value} = event.target;
      this.setState({
          [id]:value
      });
      
    }

    correcto = () =>{

        this.setState({
            show : true})

        
    }

    render() {
      return (
          <>{
            this.state.show?
          <h1 className ="max">acceso correcto</h1>
          :
          null
    }{  this.state.show?
        null
        :
        <>
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          id="username"
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          id="password"
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
        <input type ="submit" onClick={this.submitInfo} /> </>
    }
</>
      );
    }
  }

export default Acceso;