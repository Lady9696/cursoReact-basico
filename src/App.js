import './style.css';
import Card from './components/card';
import CONTACTS from './lists';
{/*aqui importo la informaciòn y genero el map */}
function App() {
  return (
    <div className="App">
      {CONTACTS.map((contac)=>{
        return(<Card key={contac.id}
          img={contac.imgURL} 
          name={contac.name}
          description={contac.description}
          
        />)
      })}
      
    </div>
  );
}

export default App;
