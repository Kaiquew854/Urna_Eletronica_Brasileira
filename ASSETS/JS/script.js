ticket = document.querySelector('.tickets');
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
let final;

//variaveis de controle de ambiente
let etapaAtual = 0;
let numero = '';
let votoBranco = true;
let nulo = false;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    for (i = 0; i < etapa.digitos; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numeros === numero) {
            return true;
        } else {
            return false;
        }
    });


    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class="d-1-image small"><img src="./ASSETS/IMAGES/${candidato.fotos[i].url}" alt=""/> ${candidato.fotos[i].legenda} </div>`
            } else {
                fotosHtml += `<div class="d-1-image"><img src="./ASSETS/IMAGES/${candidato.fotos[i].url}" alt=""/> ${candidato.fotos[i].legenda} </div>`
            }
        }

        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`
        nulo = true;
    }

}



function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    let audioTeclas = new Audio("ASSETS/AUDIO/Sound_teclas.mp3");
    audioTeclas.play();

    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    numero = '';
    votoBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    descricao.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`
    numeros.innerHTML = '';
    lateral.innerHTML = '';

}

function corrige() {
    let audioCorrige = new Audio("ASSETS/AUDIO/Sound_corrige.mp3");
    audioCorrige.play();
    comecarEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;


    if (votoBranco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: "branco",
            nomeVoto: "branco"
        })

    } else if (numero.length === etapa.digitos) {
        votoConfirmado = true;

        let candidato = etapa.candidatos.filter((item) => {
            if (item.numeros === numero) {

                return true;
            } else {
                return false;
            }
        });

        if (candidato.length > 0) {
            candidato = candidato[0];
            votos.push({
                etapa: etapas[etapaAtual].titulo,
                voto: numero,
                nomeVoto: candidato.nome
            })
        }
        if (nulo) {
            votos.push({
                etapa: etapas[etapaAtual].titulo,
                voto: numero,
                nomeVoto: "nulo"
            });
        };
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = `<div class="aviso--gigante pisca">FIM</div>`;
            ticket.innerHTML= `<span class="crg">Comprovante</span><br>;`

            for (let i = 0; i < votos.length; i++) {
                Novoticket = `<div>${votos[i].etapa}</div><div>Número: ${votos[i].voto}:</div><div>Nome: ${votos[i].nomeVoto}:</div><hr>`;
                ticket.innerHTML += Novoticket;
            }
        }
        
        let audioConfirma = new Audio("ASSETS/AUDIO/Sound_confirm.mp3");
        audioConfirma.play();
    }
}

function reloaded() {
    document.location.reload(true);
}
function novoVoto() { }

comecarEtapa();