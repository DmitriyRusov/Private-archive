function Switch(props) {

const [isActive, setIsActive] = React.useState(false)

function handleClick() {
  setIsActive(!isActive);
}
    // Используем JavaScript-шаблон для склейки значения атрибута
  const className = `switch ${props.color} ${isActive ? 'on' : 'off'}`;

  return (
    <div className={className}>
      <button className="img" onClick={handleClick} />
      <h3>{props.title}</h3>
    </div>
  );
  }

ReactDOM.render((
  <Switch title="Счастье" color="blue" isActive={false} />
), document.querySelector('#root'));
