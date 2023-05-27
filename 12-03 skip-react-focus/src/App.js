import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
    // создайте реф с помощью createRef
    this.handleSkip = this.handleSkip.bind(this);
    
    this.signature = React.createRef();
  }
  handleSubmit = () => {
    this.setState({
      message: 'Ваше соглашение принято. Большая ошибка!'
    })
  }
  handleSkip = () => {
    this.signature.current.focus();
  }
  render(){
    return (
      <div className="app">
        <h1>Important Contract</h1>
          <div className="input">
          <button className="input__button" onClick={this.handleSkip} /* добавьте атрибут onClick и назначьте ему обработчик */>
            Скучно! Не хочу читать этот договор!
          </button>
          </div>
          <p className="app__text">
            Это очень важный юридический документ, требующий исключительной внимательности при прочтении.
          </p>
          <p className="app__text">
            При разработке новых версий программного обеспечения вы обязуетесь... и так далее, 
            и тому подобное... В случае обнаружения несоответствия каким-либо существующим 
            соглашениям вы несёте всю ответственность... Что-то глаза слипаются...
          </p>
          <p className="app__text">
            Протоколы, документы, лицензии! Слияния и поглощения! Подписывая настоящий договор, 
            вы подтверждаете, что ознакомлены с содержанием каждого названного документа, и 
            соглашаетесь со всеми условиями, указанными в настоящем договоре и перечисленных документах. 
            Мы предупредили!
          </p>
          <div className="input">
            <input /* assign the ref */  type="text" className="input__name" placeholder="Ваше полное имя" />
            <input ref={this.signature}/* assign the onClick handler */  onClick={this.handleSubmit} type="submit" className="input__button" value="Я соглашаюсь со всеми условиями!" />
          </div>
          <p className="app__message">{this.state.message}</p>
      </div>
  );
  }
}

export default App;
