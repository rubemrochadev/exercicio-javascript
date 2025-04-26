function descobrirNome() {
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;


    let nomeDaBanda = "";
    let nomeDaBandaComplementar = "";

    switch (mesEscolhido) {
        case "JANEIRO":
            nomeDaBanda = "CAPIROTOS";
            break;
        case "FEVEREIRO":
            nomeDaBanda = "LENDÁRIOS";
            break;
        case "MARÇO":
            nomeDaBanda = "SOLDADOS";
            break;
        case "ABRIL":
            nomeDaBanda = "FAROESTES";
            break;
        case "MAIO":
            nomeDaBanda = "FODÕES";
            break;
        case "JUNHO":
            nomeDaBanda = "MONSTROS";
            break;
        case "JULHO":
            nomeDaBanda = "FANFARRÕES";
            break;
        case "AGOSTO":
            nomeDaBanda = "BADERNEIROS";
            break;
        case "SETEMBRO":
            nomeDaBanda = "PERTURBADOS";
            break;
        case "OUTUBRO":
            nomeDaBanda = "ALIENS";
            break;
        case "NOVEMBRO":
            nomeDaBanda = "REVOLTADOS";
            break;
        case "DEZEMBRO":
            nomeDaBanda = "GIGANTES";
            break;
    }


    switch (diaEscolhido) {
        case "1":
            nomeDaBandaComplementar = "DO ESPAÇO";
            break;
        case "2":
            nomeDaBandaComplementar = "DO INFERNO";
            break;
        case "3":
            nomeDaBandaComplementar = "DA GALÁXIA";
            break;
        case "4":
            nomeDaBandaComplementar = "DA FAZENDA";
            break;
        case "5":
            nomeDaBandaComplementar = "DO DIABO";
            break;
        case "6":
            nomeDaBandaComplementar = "DO JAPÃO";
            break;
        case "7":
            nomeDaBandaComplementar = "DAS TREVOSAS";
            break;
        case "8":
            nomeDaBandaComplementar = "DO FUNDÃO";
            break;
        case "9":
            nomeDaBandaComplementar = "DOS ILLUMINATES";
            break;
        case "10":
            nomeDaBandaComplementar = "DE COPACABANA";
            break;
        case "11":
            nomeDaBandaComplementar = "DAS TREVAS";
            break;
        case "12":
            nomeDaBandaComplementar = "CABOCLOS";
            break;
        case "13":
            nomeDaBandaComplementar = "DA NURALHA";
            break;
        case "14":
            nomeDaBandaComplementar = "VOADORES";
            break;
        case "15":
            nomeDaBandaComplementar = "DO TEMPO";
            break;
        case "16":
            nomeDaBandaComplementar = "DA ESPERANÇA É A ULTIMA QUE MORRE";
            break;
        case "17":
            nomeDaBandaComplementar = "DA MORTE";
            break;
        case "18":
            nomeDaBandaComplementar = "ABENÇOADOS";
            break;
        case "19":
            nomeDaBandaComplementar = "INFERNAIS";
            break;
        case "20":
            nomeDaBandaComplementar = "MALOQUEIROS";
            break;
        case "21":
            nomeDaBandaComplementar = "DOS 7 PECADOS CAPITAIS";
            break;
        case "22":
            nomeDaBandaComplementar = "MUMIFICADOS";
            break;
        case "23":
            nomeDaBandaComplementar = "AMIGOS DO CHIMBINHA";
            break;
        case "24":
            nomeDaBandaComplementar = "POSERS";
            break;
        case "25":
            nomeDaBandaComplementar = "DO MOSH PIT";
            break;
        case "26":
            nomeDaBandaComplementar = "VALENTÕES";
            break;
        case "27":
            nomeDaBandaComplementar = "DA ILHA DO DEMÔNIO";
            break;
        case "28":
            nomeDaBandaComplementar = "DO SEGUNDO SOL";
            break;
        case "29":
            nomeDaBandaComplementar = "REBELDES SEM CAUSA";
            break;
        case "30":
            nomeDaBandaComplementar = "GROTESCOS";
            break;
        case "31":
            nomeDaBandaComplementar = "DO CEMITÉRIO MALDITO";
            break;

        default:
            console.log("Não Preenchido");
    }
    alert(`O nome da sua banda é ${nomeDaBanda} ${nomeDaBandaComplementar}`);
}