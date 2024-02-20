import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Favpoke from './assets/components/Favpoke'
import ReactLoading from 'react-loading'


function App() {
  const [poke, setpoke] = useState('');
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')
  const [number, setnumber] = useState(1)
  const [fav, setfav] = useState([]);
  
  
  



 
  useEffect(() =>{
    let abortController = new AbortController();

    const loadapi = async() => {
      try {
        // รอคำสั่ง หลัง await เสร็จก่อนเสมอ ถึงค่อยทำงานอันต่อไป
        setloading(true)
        let response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`,{
          signal:abortController.signal
      });
        setpoke(response.data)
        seterror('');

      }catch(error) {
        seterror('something went wrong' ,error)

      } finally {
        setloading(false)

      }
     
    };
  
loadapi();

    //  cancel request api
    return () => abortController.abort();
    // [] ถ้าค่ามีอะไรเปลี่ยนแปลงจะทำ useeffect ใหม่
  }, [number]);

  console.log(poke)

  const prevpoke = () => {
    setnumber((number => number - 1))
   

  }

  const nextpoke = () => {
    setnumber((number => number + 1))
   

  }

  const addtofav = () => {
    setfav((oldstate =>[...oldstate, poke]))
    
  }

  console.log('pokenumber id',number)

  console.log('your fav pokemon', fav)
 

  





  return (
    <>
    <div>



    <div className='max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"'>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2'>

     {loading? <ReactLoading type='spin' color='red' height={'20%'} width={'20%'}/> :
     <div>
      
      <div>
      
      <h1>{poke?.name}</h1> <br></br>
      <button onClick={addtofav}>add to favorite</button>
      <img src={poke?.sprites?.other?.home?.front_default}/>
  
      <ul>
        {poke?.abilities?.map((abil, idx) =>(
          <li key={idx} style={{listStyleType:'none'}}>{abil.ability.name}</li>
        ))}
      </ul>
      <button onClick={prevpoke}>Prevpoke</button>
      <button onClick={nextpoke}>Nextpoke</button>
  
        </div>
      
      
      </div>}
      
      <div>
      <h2 >Your favorited pokemon</h2> <br/>
        {fav.length >0 ? <Favpoke fav={fav} /> :
        
        <p style={{marginTop:'300px'}}>No Favorite Pokemon</p>
        }
       
        </div>

    </div>
    </div>
        
     




    
    
    

    
    </div>


   
    

     
      
    </>
  )
}

export default App
