import './Fotos.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import ImgCarrossel from '../../components/imgCarrosel/ImgCarrossel';

function Fotos() {
    return (
        <>
        <Navegacao />
        <h1 style={{color: "#A7A000"}}>FOTOS</h1>
        <ImgCarrossel/>
        </>
    );
}
export default Fotos;