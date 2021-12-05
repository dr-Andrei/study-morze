//Старт
document.querySelector(".start").onclick = t1;

function t1() {

    let str = document.querySelector('.container__text').value;
    let arr = [];
    let out = [];

    arr = str.split("");

    let audioa = new Audio('audio/a.wav');
    let audiob = new Audio('audio/b.wav');
    let audiov = new Audio('audio/v.wav');
    let audiog = new Audio('audio/g.wav');
    let audiod = new Audio('audio/d.wav');
    let audioe = new Audio('audio/e.wav');
    let audiozh = new Audio('audio/zh.wav');
    let audioz = new Audio('audio/z.wav');
    let audioi = new Audio('audio/i.wav');
    let audioiii = new Audio('audio/iii.wav');
    let audiok = new Audio('audio/k.wav');
    let audiol = new Audio('audio/l.wav');
    let audiom = new Audio('audio/m.wav');
    let audion = new Audio('audio/n.wav');
    let audioo = new Audio('audio/o.wav');
    let audiop = new Audio('audio/p.wav');
    let audior = new Audio('audio/r.wav');
    let audios = new Audio('audio/s.wav');
    let audiot = new Audio('audio/t.wav');
    let audiou = new Audio('audio/u.wav');
    let audiof = new Audio('audio/f.wav');
    let audioh = new Audio('audio/h.wav');
    let audioc = new Audio('audio/c.wav');
    let audiosh = new Audio('audio/sh.wav');
    let audioshia = new Audio('audio/shia.wav');
    let audioq = new Audio('audio/bz.wav');
    let audioii = new Audio('audio/ii.wav');
    let audioee = new Audio('audio/ee.wav');
    let audioiu = new Audio('audio/iu.wav');
    let audioia = new Audio('audio/ia.wav');


    for (let i of arr) {
        i = i.toLowerCase();

        if (i == 'а') out.push(audioa);
        if (i == 'б') out.push(audiob);
        if (i == 'в') out.push(audiov);
        if (i == 'г') out.push(audiog);
        if (i == 'д') out.push(audiod);
        if (i == 'е') out.push(audioe);
        if (i == 'ж') out.push(audiozh);
        if (i == 'з') out.push(audioz);
        if (i == 'и') out.push(audioi);
        if (i == 'й') out.push(audioiii);
        if (i == 'к') out.push(audiok);
        if (i == 'л') out.push(audiol);
        if (i == 'м') out.push(audiom);
        if (i == 'н') out.push(audion);
        if (i == 'о') out.push(audioo);
        if (i == 'п') out.push(audiop);
        if (i == 'р') out.push(audior);
        if (i == 'с') out.push(audios);
        if (i == 'т') out.push(audiot);
        if (i == 'у') out.push(audiou);
        if (i == 'ф') out.push(audiof);
        if (i == 'х') out.push(audioh);
        if (i == 'ц') out.push(audioc);
        if (i == 'ш') out.push(audiosh);
        if (i == 'щ') out.push(audioshia);
        if (i == 'ь') out.push(audioq);
        if (i == 'ы') out.push(audioii);
        if (i == 'э') out.push(audioee);
        if (i == 'ю') out.push(audioiu);
        if (i == 'я') out.push(audioia);
        if (i == ' ') {
            out.push('пауза пробела');
            continue;
        }
        out.push('пауза между звуками');

    }

    //Функция старта воспроизведения
    startPlay();
    function startPlay() {
        let id = setInterval(go, 1310);
        let i1 = 0;
        let i2 = out.length;
        let err = 0;

        //Воспроизведение массива звуков
        function go() {
            if (i1 == i2) {
                clearInterval(id);
                play = true;
            } else {
                try {
                    out[i1].play();
                }
                catch (e) {
                    setTimeout(function () {
                        err = e;
                    }, 1500)
                }
                i1++;

            }
        }
    };

    //Кнопка очистки данных
    document.querySelector(".clear").onclick = function () {
        let arr = [];
        let out = [];
        document.querySelector('.container__text').value = '';
        document.querySelector('.ok').innerHTML = '';
    };
}


