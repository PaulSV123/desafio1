import { useState, useEffect } from 'react'
import { DataIngreso } from './api/Data'
import DoughnutApp from './components/grafico';
import './App.css'

function App() {

  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const [arrayUser, setArrayUser] = useState([]);
  const [ingresoUser, setIngresoUser] = useState(0);
  const [agregarUser, setAgregarUser] = useState(5);

  const siguienteUser = () => {
    setId((siguiente) => siguiente < 5 ? siguiente + 1 : siguiente = 5);
    return true;
  }

  const anteriorUser = () => {
    setId((anterior) => anterior > 1 ? anterior - 1 : anterior = 1);
    return true;
  }

  const usuarioInit = () => {
    setAgregarUser((agregarUser) => agregarUser > 0 ? agregarUser -= 1 : setAgregarUser(5) & setIngresoUser);
    setIngresoUser((ingresoUser) => {
      if(ingresoUser <= 5){
        ingresoUser = ingresoUser + 1
      }
      arrayUser.push(user.name);
      return ingresoUser;
    });
  }

  const dataPlaceholder = async (id) =>{
    const data = await DataIngreso(id);
    setUser({...data});
  }

  useEffect(() => {
    dataPlaceholder(id);
  }, [id]);

  return(
    <div className="App">
      <div className="Reto">
        <h1> Reto Jhordan</h1>
      </div>
      <div className="text-center">
        <h3>ID: {user.id}</h3>
        <h3>Nombre: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Ciudad: {user.address}</h3>
        <div className="lista">
          <h3> Lista de Usuarios</h3>
          <ul>
            {
              arrayUser.map((usuarios, i) => {
                if (i % 2 != 0) {
                  return(
                    <li key={i}>
                      {usuarios}
                    </li>
                  );
                };
              })
            }
          </ul>
        </div>
      </div>
      <div className="grafico">
        <DoughnutApp agregarUser={agregarUser} ingresoUser={ingresoUser} user={user.length} />
      </div>
      <div className="Buttons">
        <button type="button" className='btn btn-add' onClick={anteriorUser}>Anterior</button>
        <button type="button" className='btn btn-add' onClick={usuarioInit}>Agregar</button>
        <button type="button" className='btn btn-add' onClick={siguienteUser}>Siguiente</button>
      </div>
    </div>
  )
}

export default App
