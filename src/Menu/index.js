import React from 'react';
import './style.css';
import img from './images/menu.png';
import morse from 'morse-decoder';
const fortune = require('fortune-cookie-ru');

/**
 * Всплывающее меню настройки воспроизведения кода
 */

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: 'none',
            audio_size: localStorage.getItem('audio_size')
        }
    }

    showMenu = () => {
        document.querySelector('.settings-menu_pole').classList.toggle('hs');
    }

    f_audio_size = (e) => {
        this.setState({ audio_size: e.target.value });
        localStorage.setItem('audio_size', e.target.value);
    }


    render() {
        return (
            <div className="settings-menu">
                <div className='settings-menu_icon'>
                    <img src={img} alt="" onClick={this.showMenu} />
                </div>
                <div className='settings-menu_pole hs'>
                    <h3>Настройки</h3>
                    <ul className='settings-menu_pole__list'>
                        <li className='settings-menu_pole__list-item'>
                            <h5 className='settings-menu_pole__p'>Продолжительность звука:</h5>
                            <div className='settings-menu_pole__out'>
                                <input className="footer-edit__count-letters" type="range" name="" max="0.2" min="0" step="0.01" onChange={this.f_audio_size} value={this.state.audio_size} />
                                <p className='settings-menu_pole__out_n1'>{this.state.audio_size}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
