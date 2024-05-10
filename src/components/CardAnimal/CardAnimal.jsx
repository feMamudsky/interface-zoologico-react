import imgNotFound from '../../assets/img-not-found.png'
import './CardAnimal.css'
import Table from 'react-bootstrap/Table';

function AnimalTable() {
  return (
    <div className='container'>
      <div className='table-wrapper'>
        <Table striped>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Gênero</th>
              <th>Envergadura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Luna</td>
              <td>5</td>
              <td>Fêmea</td>
              <td>2.1 metros</td>
            </tr>
            <tr>
              <td>Jorge</td>
              <td>3</td>
              <td>Macho</td>
              <td>1.8 metros</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>8</td>
              <td>Fêmea</td>
              <td>1.5 metros</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AnimalTable;
