const zebras = 'Зебры';
const leeches = 'пиявок';
const elephants = 'слонята';

ReactDOM.render((
  <div>
    <h2>Грустные факты о животных</h2>
    <p>
      Новорожденные {elephants} не умеют управлять хоботом.
    </p>
    <p>
      {zebras} не могут спать в одиночестве.
    </p>
    <p>
      У {leeches} 32 мозга.
    </p>
  </div>
), document.querySelector('#root'));
