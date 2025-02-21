import './App.css'
import Board from './components/Board'

function App() {

  function calculateWinner(popunjenaPolja) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (popunjenaPolja[a] && popunjenaPolja[a] === popunjenaPolja[b] && popunjenaPolja[a] === popunjenaPolja[c]) {
          return {winner: popunjenaPolja[a], winnerPolja: lines[i]}
        }
    }
    return {winner: null, winnerPolja: []}
    }

  return (
    <div>

      <h2>IGRA VINKA I INES</h2>
      <Board calculateWinner={calculateWinner}/>
    
    </div>
  )

}

export default App;
