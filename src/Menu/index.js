import React from 'react';
import './style.css';
import img from './images/menu.png';

/**
 * Всплывающее меню настройки воспроизведения кода
 */

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: 'none',

        }
    }

    showMenu = () => {
        document.querySelector('.settings-menu_pole').classList.toggle('hs');
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
                            <h5 className='settings-menu_pole__p'>Продолжительность звука: <b>{this.state.countLetters}</b></h5>
                            <div className='settings-menu_pole__out'>
                                <input className="footer-edit__count-letters" type="range" name="" max="100" min="0" onChange={this.f_countLetters} value={this.state.countLetters} />
                                <p className='settings-menu_pole__out_n1'>24</p>
                            </div>
                        </li>
                        <li className='settings-menu_pole__list-item'>
                            <h5 className='settings-menu_pole__p'>Время между звуками: <b>{this.state.countLetters}</b></h5>
                            <div className='settings-menu_pole__out'>
                                <input className="footer-edit__count-letters" type="range" name="" max="100" min="0" onChange={this.f_countLetters} value={this.state.countLetters} />
                                <p className='settings-menu_pole__out_n2'>55</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
