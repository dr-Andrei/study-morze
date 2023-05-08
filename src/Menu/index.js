import React from 'react';
import './style.css';
import img from './images/menu.png';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: 'none',
        }
    }

    showMenu = () => {
        document.querySelector('.settings-menu_pole').classList.toggle('hide');
    }

    render() {
        return (
            <div className="settings-menu">
                <div className='settings-menu_icon'>
                    <img src={img} alt="" onClick={this.showMenu} />
                </div>
                <div className='settings-menu_pole hide'>
                    <h3>Настройки</h3>
                    <ul className='settings-menu_pole__list'>
                        <li className='settings-menu_pole__list-item'></li>
                        <li className='settings-menu_pole__list-item'></li>
                        <li className='settings-menu_pole__list-item'></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
