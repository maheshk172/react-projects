// STAR MATCH - V2
const PlayNumber = (props) => (
  <button className="number" 
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}>
    {props.number}
  </button>
)

const StarDisplay = (props) => (
  <>
  {utils.range(1, props.count).map(starId =>
    <div key={starId} className="star" />
  )}
  </>  
)



const PlayAgain = props => (
  <>
    <div class="game-done"> 
      <div class="message"
           style={{color: props.gameStatus === 'won' ? 'blue' : 'red'}}>
        {props.gameStatus === "won"
          ? "You have won the Game"
          : "You have lost the Game, loser !!"
        }
      </div>
      <button onClick={props.onClick}>Play Again</button>  
    </div>
  </>
)

// Custom Hook
const useGameState = () => {
  
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9)); 
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  // const gameIsDone = availableNums.length === 0;
  // const gameIsLost = secondsLeft === 0;
  const gameStatus = availableNums.length === 0 ?
        'won' : secondsLeft === 0 ? 'lost' : 'active';
  
  useEffect(() => {
    // console.log('rendered StartMatch again');
    if(secondsLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });
  
  const setGameState = (newCandidateNums) => {
    if(utils.sum(newCandidateNums) != stars){ 
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      
      setStars(utils.randomSumIn(newAvailableNums, 9))
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }
  
  return {
    stars, availableNums, candidateNums, secondsLeft, gameStatus, setGameState
  }
}



const Game = (props) => {
	
  const {
    stars, availableNums, candidateNums, secondsLeft, gameStatus, setGameState
  } = useGameState();
  
  const resetGame = () => {
    // setStars(utils.random(1, 9));
    // setAvailableNums(utils.range(1, 9));
    // setCandidateNums([]);
    // setSecondsLeft(10);
    
    //Doing it in better way
    props.playNewGame();
  }
  
  const getNumberStatus = (number) => {
    if(!availableNums.includes(number)) {
      return 'used';
    }
    
    if(candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
      
    return 'available';
  }
  
  const onNumberClick = (clickedNumber, currentStatus) => {
    // Old State => new State
    console.log('Num:', clickedNumber, ", status: ", currentStatus);
    
    if(currentStatus === 'used') {
      return;
    } 
    
    const newCandidateNums = 
          currentStatus === 'available' 
          ? candidateNums.concat(clickedNumber)
          : candidateNums.filter(cn => cn !== clickedNumber);
    
   setGameState(newCandidateNums);
  }
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus === 'active' 
          ? <StarDisplay count={stars} />
          :  <PlayAgain onClick={resetGame} gameStatus={gameStatus}/>   
          }
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
              key={number} 
              number={number} 
              status={getNumberStatus(number)}
              onClick={onNumberClick}/>
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} playNewGame ={() => setGameId(gameId + 1)}/>;
}

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(max * Math.random()),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);