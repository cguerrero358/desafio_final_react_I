import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./Buscador";

function App() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
        setFilteredPeople(data.results); 
      });
  }, []); 

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPeople(filtered);
  };

  const handleSortByName = () => {
    const sortedName = [...filteredPeople].sort((a, b) => {
      if (ordenAscendente) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredPeople(sortedName); // Usar `sortedName` en lugar de `sortedFeriados`
    setOrdenAscendente(!ordenAscendente);
  };

  return (
    <>
      <h2>Personajes Películas de Star Wars</h2>
      
      <Buscador
        placeholder="Busca un personaje"
        handlerInput={setSearchTerm}
        handlerButton={() => handleSearch(searchTerm)}
      />
      <button className="Boton_Ordenar" onClick={handleSortByName}>
                Ordenar por Nombre {ordenAscendente ? 'ascendente' : 'descendente'}
      </button>
      <br></br>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Año Nac</th>
            <th className="px-4 py-2">Altura</th>
            <th className="px-4 py-2">Peso</th>
            <th className="px-4 py-2">Color de pelo</th>
            <th className="px-4 py-2">Color de piel</th>
            <th className="px-4 py-2">Color de ojos</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((people) =>
            <tr key={people.name}>
              <td className="border px-4 py-2">{people.name}</td>
              <td className="border px-4 py-2">{people.birth_year}</td>
              <td className="border px-4 py-2">{people.height}</td>
              <td className="border px-4 py-2">{people.mass}</td>
              <td className="border px-4 py-2">{people.hair_color}</td>
              <td className="border px-4 py-2">{people.skin_color}</td>
              <td className="border px-4 py-2">{people.eye_color}</td>
             
            </tr>
          )}
           </tbody>
      </table>
    </>
  );
}

export default App;