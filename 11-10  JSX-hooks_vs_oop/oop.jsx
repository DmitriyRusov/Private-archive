// Пример из предыдущего урока
class NeonCursor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { top: 0, left: 0 };
  }

    // Метод будет вызван сразу после монтирования: создаём эффекты
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.body.classList.add('no-cursor');
  }

    // Метод будет вызван непосредственно перед размонтированием: удаляем эффекты
  componentWillUnmount() {
    document.body.classList.remove('no-cursor');
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      top: event.pageY,
      left: event.pageX,
    });
  };

  render() {
    return (
      <img
        src="https://code.s3.yandex.net/web-code/react/cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: this.state.top,
          left: this.state.left,
          pointerEvents: 'none',
        }}
      />
    );
  }
} 