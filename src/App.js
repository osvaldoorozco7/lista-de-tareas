import './App.css';
import CodeMonkeyLogo from './imagenes/Code_Monkey.png'
import ListaDeTareas from './componentes/ListaDeTareas.jsx'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='codemonkey-logo-contenedor'>
        <img 
        src={CodeMonkeyLogo }
        alt='Code Monkey Logo' 
        className='codemonkey-logo'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>


    </div>
  );
}

export default App;
