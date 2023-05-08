function GoodDeeds() {
  
const [deeds, setDeeds] = React.useState([]);

  function handleAddTask(e) {
    const input = e.target.previousSibling;

    /* А здесь передавайте в сеттер массив с новым элементом из input.value */
    setDeeds([...deeds, input.value]);

    input.value = '';
  }

  return (
    <>
      <h3>Мои хорошие поступки</h3>
      <input type="text" placeholder="Поступок" />
      <button onClick={handleAddTask}>Добавить!</button>
      <ol>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ol>
    </>
  );
}

ReactDOM.render((
  <GoodDeeds />
), document.querySelector('#root'));
