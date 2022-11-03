import React, {useState} from 'react';
import './App.css';


function App() {

  // ******* Add your code below to use React's useState
  // hook to track and update a variable called counter1
const [counter1, setCounter1] = useState(0)
  




  // ****** Start here!
  // ****** Add code for counter2 on the right side of the screen
let counter2 = 0
function plusClicked() {
  counter2++
  document.getElementById("p2").innerText = counter2
}

function minusClicked() {
  counter2--
  document.getElementById("p2").innerText = counter2

}
  


  return (

    <main>
    
      {/* Change the content of col1 below to show and */}
      {/* modify the value of counter1 */}
      <div className="col1">
        <div className="inlineB">
          <p className="num">{counter1}</p>
          <button onClick={() => setCounter1(counter1 - 1)} className="minus">-</button>
          <button onClick={() => setCounter1(counter1 + 1)} className="plus">+</button>
        </div>
      </div>
    

      {/* Change this code to show and change counter2 */}
      <div className="col2">
        <div className="inlineB">
          <p className="num" id="p2">0</p>
          <button onClick={minusClicked} className="minus" id="m_btn">-</button>
          <button onClick={plusClicked} className="plus" id="p_btn">+</button>
        </div>
      </div>

    </main>

  );
}

export default App;