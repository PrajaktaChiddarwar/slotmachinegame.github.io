
import './App.css';
import './slotmachine.css';


const SlotM = (props) =>
{
  // let x= props.x;
  // let y = props.y;
  // let z = props.z;
  // this can be done by object destructuring
   
  let {x, y, z} =props; 
  // line no 12 is actually object destructuring of above 3 variables
  if((x===y) && (y===z))
  {
    return(
      <>
      <div className='slot'>
      <div className='slot-inner'>
        <h1> {x} {y} {z}</h1>
        <h1> This is Matching</h1>
      </div>
      </div>
      </>
    );
  }
  else
  {
    return(
      <>
      <div className='slot'>
      <div className='slot-inner'>
        <h1 className='emoji'> {x} {y} {z}</h1>
        <h1> This is not Matching</h1>
      </div>
      </div>
      </>
    );
  }
}
function App() {

 return(
    <>
    <div className='Heading-style'>
    <h1>📟 Welcome to  <span style={{fontWeight : 'bold' , textTransform : 'uppercase'}}>Slot Machine Game </span> 📟 </h1>   {/* This is emoji is done by Window+. shortcut  */}
    </div>
    <hr />
    <div className='slotMachine'>
    <SlotM  x= '😀'  y= '😀'  z= '😀'/ >
    <hr />
    <SlotM  x= '😀'  y= '🥰'  z= '😀'/ > <hr />
    <SlotM  x= '🎅'  y= '😀'  z= '🧔'/ > <hr />
    <SlotM  x= '🎅'  y= '🎅'  z= '🎅'/ > <hr />
    <SlotM  x= '😀'  y= '🥰'  z= '🎅'/ > <hr />
    <SlotM  x= '😸'  y= '🐯'  z= '🐴'/>  

    </div>

    </>
 );
  
}

export default App;
