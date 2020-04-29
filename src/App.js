import React from 'react';
import './App.css';
import Modal from './Modal'
class App extends React.Component {
  state = { show: false };
  componentDidMount(){
    this.showModal()
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main className="App">
        <h1>Modal As Alert</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>im Alive</p>
        </Modal>
      </main>
    );
  }
}

export default App;
