/* eslint-disable react/prop-types */
import { useState } from 'react'

// eslint-disable-next-line react/prop-types

// Komponen Square mewakili satu kotak dalam papan permainan tic-tac-toe
// Menerima 'value' dan 'onSquareClick' sebagai prop dari komponen induknya
function Square({value, onSquareClick}) {

  return ( 
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}
// Komponen Board mewakili seluruh papan permainan tic-tac-toe
// Menerima 'xIsNext', 'square', dan 'onPlay' sebagai prop dari komponen induknya
 function Board({xIsNext, square, onPlay}) {
 
// Fungsi handleClick dipanggil saat suatu kotak diklik
  // Fungsi ini memeriksa apakah kotak tersebut sudah terisi atau jika sudah ada pemenang
  // Jika tidak, ia memperbarui kotak-kotak berikutnya dan memanggil callback 'onPlay'
  function handleClick(i) {
    // jika kotak tersebut bernilai true atau ada isinya maka return / keluar dari program
    // atau jika sudah ada pemenang maka program berhenti
    if (square[i] || cariPemenang(square)) return;

    const nextSquares = square.slice();
    // if (xIsNext) {
    //   nextSquares[i] = 'X';
    // } else {
    //   nextSquares[i] = 'O';

    // }
    // jika player x true maka di isi x, jika player O maka diisi o
    nextSquares[i] = xIsNext ? 'X': 'O';
    onPlay(nextSquares);

  }
  // Menghitung pemenang atau giliran pemain berikutnya dan menampilkan statusnya
  const pemenang = cariPemenang(square);
  let status ='';

  if (pemenang) {
    status ='Winner: ' + pemenang;
  } else {
    status = 'Next Player: '+ (xIsNext? 'X' : 'O');
  }

  // Komponen Board merender serangkaian komponen Square
  // Setiap Square memiliki nilai dan event handler onClick
  return (
    <>
    <div className="status">{status}</div>
    <div className='board'>
      <Square value={square[0]} onSquareClick={() => handleClick(0)} />
      <Square value={square[1]} onSquareClick={() => handleClick(1)} />
      <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      <Square value={square[3]} onSquareClick={() => handleClick(3)} />
      <Square value={square[4]} onSquareClick={() => handleClick(4)} />
      <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      <Square value={square[6]} onSquareClick={() => handleClick(6)} />
      <Square value={square[7]} onSquareClick={() => handleClick(7)} />
      <Square value={square[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  )
}
// Komponen Game mewakili seluruh permainan tic-tac-toe
// Mengelola status permainan menggunakan state 'history', 'currentMove', 'xIsNext', dan 'currentSquare'
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];
  
  // Fungsi jumpTo memungkinkan pemain melompat ke langkah tertentu dalam permainan
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Fungsi handlePlay dipanggil saat suatu kotak dimainkan
  // Memperbarui riwayat permainan dan langkah saat ini
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Variabel moves memetakan riwayat permainan dan menampilkan tombol untuk setiap langkah
  const moves = history.map((square, move) => {
    let description = '';

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description =' Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  // Komponen Game merender Komponen Board dengan status permainan saat ini
  // Juga menampilkan daftar langkah
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>        
      </div>
    </div>
  );
}

// Fungsi cariPemenang memeriksa apakah ada pemenang berdasarkan kotak-kotak tic-tac-toe yang diberikan
function cariPemenang(square) {
  const lines = [
    // horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // vertikal
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // miring
    [0,4,8],
    [2,4,6],
  ];
    
  // Mengiterasi melalui garis untuk mencari pemenang
  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0]; //0
    // const b = lines[i][1]; //1
    // const c = lines[i][2]; //2

    const [a,b,c] = lines[i];
    // logic program
    if(square[a] == square[b] && square[b]== square[c]) {
      return square[a];
    } 
  }
  // Jika tidak ada pemenang, mengembalikan false
  return false;
}