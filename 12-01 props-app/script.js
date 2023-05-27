function App() {
  const [size, setSize] = React.useState(0);

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  return (
    <>
      <Slider onChange={handleSizeChange} size={size} />
      <Bubbles size={size}/>
    </>
  );
}

function Slider(props) {
  return (
    <div id="slider-container">
      <input type="range" min="0" max="100" value={props.size} onChange={props.onChange} />
      <div className="counter">{props.size}</div>
    </div>
  );
}

function Bubbles(props) {
  // Наиболее простой способ отрисовать RandomBubble 20 раз подряд:
  return Array.from(Array(20), (_, i) => (
    <RandomBubble key={i} size={props.size}/>
  ));
}

function RandomBubble(props) {
  // Используем стейт, чтобы запомнить исходные параметры при первом рендере
  const [initialStyle] = React.useState({
    top: getRandomInt(0, document.body.offsetHeight),
    left: getRandomInt(0, document.body.offsetWidth),
    backgroundColor: `#${getRandomInt(0, (256 ** 3) - 1).toString(16)}`,
  });
  const [initialScale] = React.useState(getRandomInt(1, 10) / 20);

  return (
    <div className="bubble" style={{
      ...initialStyle,
      // Исходный масштаб домножается на значение props.size или на 0, если props.size не задан
      transform: `scale(${initialScale * (props.size || 0)})`,
    }} />
  );
}

// Возвращает случайное целое число в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

ReactDOM.render((
  <App />
), document.querySelector('#root'));
