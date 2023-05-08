class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shouldShowScale: false };
  }

  handleChange = () => {
    this.setState({
      shouldShowScale: !this.state.shouldShowScale,
    });
  };

  render() {
    return (
      <>
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          Показать измеритель экрана
        </label>
        {this.state.shouldShowScale && <Scale />}
      </>
    );
  }
}

class Scale extends React.Component {
  constructor() {
    super();

    this.state = {
      windowSize: [window.innerWidth, window.innerHeight],
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }
  
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({
      windowSize: [window.innerWidth, window.innerHeight],
    });
  };

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <h3>Размер окна:</h3>
          <h2>{this.state.windowSize[0]} x {this.state.windowSize[1]}</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));
