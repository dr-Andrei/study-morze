import React from 'react';
import mashine from './img/mashine.jpg';
import morse from 'morse-decoder';
const fortune = require('fortune-cookie-ru');


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', //выводимый сгенерированный текст
            trueStart: true,
            textForUsers: '',
            countLetters: 10,  // количество букв для рандомного текста
            init: () => {
                //инициализация переменных с localStorage
                if (localStorage.getItem('countLetters')) this.setState({ countLetters: localStorage.getItem('countLetters') });
                else localStorage.setItem('countLetters', this.state.countLetters);
                if (localStorage.getItem('audio_size')) this.setState({ audio_size: localStorage.getItem('audio_size') });
                else localStorage.setItem('audio_size', 0.1);
            }
        }
    }
    componentDidMount() {
        //запуск функции до отрисовки страницы
        this.state.init();
    }

    myMorzeCod = () => {
        this.state.init();
        this.setState({ trueStart: false });
        let textRandom = fortune.get().substring(0, this.state.countLetters); // рандомный текст
        //массив CharCode символов для поиска и исключения их из результата
        let massSymbols = [45, 59, 33, 58, 44, 63, 91, 93, 123, 125];

        //поиск недопустимых символов в строке и их устранение
        let arrDone = textRandom.split('').map((elem) => { if (!massSymbols.includes(elem.charCodeAt())) return elem; else return '0'; })
            .filter(value => { if (value !== '0') return value; else return false; }).join('').split(' ')
            .filter(value => { if (value !== '') return value; else return false; }).join(' ').split('.')[0];

        this.setState({ text: arrDone });
        this.setState({ textForUsers: 'сгенерирован новый текст' });

        const audio = morse.audio(arrDone, {
            unit: localStorage.getItem('audio_size'), // продолжительность звука
            fwUnit: localStorage.getItem('audio_size') * 2, // время между буквами
            oscillator: {
                type: 'sine',
                frequency: 400,
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
    f_countLetters = (e) => {
        this.setState({ countLetters: e.target.value });
        localStorage.setItem('countLetters', e.target.value);
    }
    render() {
        //По нажатию Enter происходит старт процесса
        document.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === '1') { this.startTrue() };
            if (e.key === '2') { this.shText() };
            //console.log(e.key);
            //F4, F6, F8
        }
        return (
            <div>
                <main>
                    <h2>Чтобы Прослушать новый текст нажмите клавишу <b>Enter</b> или <b>1</b></h2>
                    <div className='App_work-area'>
                        <h3>Ваш текст <em className='text-s'>{this.state.textForUsers}</em>:</h3>
                        <div className='block-text '><p className='text-hide'>{this.state.text ? this.state.text : '...'}</p></div>
                        <p><button className='btn show-block-text' type="button" onClick={this.shText}>Посмотреть текст</button> или нажмите <b>2</b></p>
                        <p><em>Черновик для ввода текста:</em></p>
                        <textarea rows="10" cols="50" autoFocus></textarea>
                    </div>
                    <div className='App_photo-area'>
                        <img src={mashine} alt="" />
                    </div>
                </main>
                <footer className='footer-edit'>
                    <h3>Настройки</h3>
                    <p>Количество выводимых символов: <b>{this.state.countLetters}</b></p>
                    <input className="footer-edit__count-letters" type="range" name="" max="100" min="3" onChange={this.f_countLetters} value={this.state.countLetters} />
                </footer>
            </div>
        )
    }

}

export default Main;