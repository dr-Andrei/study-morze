import React from 'react';
import './style.css';
import morse from 'morse-decoder';
const fortune = require('fortune-cookie-ru');


class learnLetters extends React.Component {
    constructor(props) {
        super(props);

    }
    playLetters = (e) => {
        const audio = morse.audio(e.target.attributes[1].textContent, {
            unit: 0.14, // продолжительность звука
            fwUnit: 0.3, // время между буквами
            oscillator: {
                type: 'sine',
                frequency: 500
            }
        });
        audio.play(); // play audio
    }
    render() {
        return (
            <article className='article'>
                <table className='letters-table'>
                    <thead>
                        <tr>
                            <td>Буква</td>
                            <td>Код</td>
                            <td>Расшифровка</td>
                            <td>Воспроизвести</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Й</td>
                            <td><b>.---</b></td>
                            <td>й-краа-ткооо-ееее</td>
                            <td><button type="button" data-letter="й" onClick={this.playLetters}>Play</button></td>
                        </tr>
                        <tr>
                            <td>Щ</td>
                            <td><b>--.-</b></td>
                            <td>щууу-кааа-жи-вааааа</td>
                            <td><button type="button" data-letter="щ" onClick={this.playLetters}>Play</button></td>
                        </tr>
                        <tr>
                            <td>Ы</td>
                            <td><b>-.--</b></td>
                            <td>ыыы-не-нааа-дооо</td>
                            <td><button type="button" data-letter="ы" onClick={this.playLetters}>Play</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        );
    }
}

export default learnLetters;
