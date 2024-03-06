import Navegacao from './Navegacao';
import CardAnimal from './CardAnimal';
import './Animal.css';

function Animal() {
    return (
        <div className="pagina-animal">
            <Navegacao />
            <div className="conteudo-animal">
                <h2>Animais do Zoológico</h2>
                <div className="cards-container">
                    <CardAnimal />
                </div>
            </div>
        </div>
    );
}

export default Animal;
