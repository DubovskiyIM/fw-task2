import React from 'react';
import List from './List';

class Stater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      v: 'Hello',
      inputValue: '',
      users: null,
      isShown: false
    };
  }

  click() {
    this.setState({ v: 'Hi, man!' });
  }

  change(value) {
    this.setState(prevState => ({
      ...prevState,
      inputValue: value
    }));
  }

  showList() {
    this.setState(prevState => ({
      ...prevState,
      isShown: !this.state.isShown
    }));
  }

  componentDidMount() {
    fetch('https://kodaktor.ru/j/users')
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
        ...prevState,
        users: data.users
      })));
  }

  render() {
    return (
      <>
        <h1 onClick={::this.click}>{this.state.v}</h1>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.change(e.target.value)}
        />
        <input
          value={this.state.inputValue}
          onChange={(e) => this.change(e.target.value)}
        />
        <button onClick={::this.showList}>Get Users</button>
        {this.state.isShown && <List users={this.state.users}/>}
      </>
    );
  }
}

export default Stater;
