import React from 'react';
import autoBind from 'react-autobind';
import './App.css'
class App extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state ={
      message:'',
      again:false
    }
  }

  
  componentDidMount() {
    this.handlePopulatedData = (event) => {
        const data = event.detail;
        this.setState({message:data}) 
    };

    window.addEventListener('populatedData', this.handlePopulatedData);

}


  render() {
    return (
      <div className="App">
        <div className="container" style={{maxWidth:"800px"}}>
          <div className="content">
            {this.state?.message ? <h1 class="gradient-text">{this.state.message}</h1>:<h1 class="gradient-text">DEMO SERVER FOR WITHOUT LANDING PAGE</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default App ;