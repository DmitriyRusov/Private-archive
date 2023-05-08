class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive,
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <>
    <Switch title="Счастье" color="blue" isActive={true} />
    <Switch title="Любовь" color="orange" isActive={false} />
    <Switch title="Шаурма" color="green" isActive={false} />
  </>
), document.querySelector('#root'));
