import React from 'react';
import './App.css';
import morse from 'morse-decoder';
import mashine from './img/mashine.jpg';
const fortune = require('fortune-cookie-ru');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', //выводимый сгенерированный текст
      trueStart: true,
      textForUsers: ''
    }
  }

  myMorzeCod = () => {
    this.setState({ trueStart: false });
    let countLetters = 10; // количество букв для рандомного текста
    let textRandom = fortune.get().substring(0, countLetters); // рандомный текст
    //массив CharCode символов для поиска и исключения их из результата
    let massSymbols = [45, 59, 33, 58, 44, 63, 91, 93, 123, 125];

    //поиск недопустимых символов в строке и их устранение
    let arrDone = textRandom.split('').map((elem) => { if (!massSymbols.includes(elem.charCodeAt())) return elem; else return '0'; })
      .filter(value => { if (value !== '0') return value; else return false; }).join('').split(' ')
      .filter(value => { if (value !== '') return value; else return false; }).join(' ').split('.')[0];

    this.setState({ text: arrDone });
    this.setState({ textForUsers: 'сгенерирован новый текст' });

    const audio = morse.audio(arrDone, {
      unit: 0.14, // продолжительность звука
      fwUnit: 0.3, // время между буквами
      oscillator: {
        type: 'sine',
        frequency: 500,
        onended: function () {
          setTimeout(() => {
            if (window.confirm("Запись закончена. Загрузить новую запись?") === true) {
              window.location.reload();
            }
          }, 10000);
        }
      }
    });
    audio.play(); // play audio
  }
  startTrue = () => {
    if (this.state.trueStart) { this.myMorzeCod() }
  }
  shText = () => {
    document.querySelector('.block-text p').classList.toggle('text-hide');
  }
  render() {
    //По нажатию Enter происходит старт процесса
    document.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === '1') { this.startTrue() };
      if (e.key === '2') { this.shText() };
    }

    return (
      <div className="App">
        <header>
          <h1>Самоучитель Азбуки Морзе</h1>
          <p className='App__p'>.--. .-. .. .-- . -</p>
        </header>
        <main>
          <h2>Нажмите "Прослушать новый текст" или клавишу Enter для старта</h2>
          <div className='App_work-area'>
            <h3>Ваш текст <em className='text-s'>{this.state.textForUsers}</em>:</h3>
            <div className='block-text '><p className='text-hide'>{this.state.text ? this.state.text : 'Нажмите "Прослушать новый текст" или клавишу Enter для старта'}</p></div>
            <p><button className='btn' type="button" onClick={this.startTrue}>Прослушать новый текст</button> или нажмите <b>1</b></p>
            <p><button className='btn show-block-text' type="button" onClick={this.shText}>Посмотреть текст</button> или нажмите <b>2</b></p>
            <p><em>Поле для ввода текста:</em></p>
            <textarea rows="10" cols="50" autoFocus></textarea>
          </div>
          <div className='App_photo-area'>
            <img src={mashine} alt="" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
