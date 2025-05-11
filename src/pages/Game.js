import React, { useEffect, useState } from 'react';
import whiteMoneyComing from '../assets/white_money_coming.jpg';
//import turboLoading from '../assets/turbo_loading.webp';
import redBackground from '../assets/redbackground.jpg';
import welcome1 from '../assets/welcome.webp';
import welcome2 from '../assets/welcome2.webp';
import welcome3 from '../assets/welcome3.webp';
import money1 from '../assets/money1.jpg';
import money2 from '../assets/money2.jpg';
import money4 from '../assets/money4.jpg';
import slotMachineImage from '../assets/slotting_machine.jpg';
import spinningNumbers from '../assets/spinning_numbers.webp';
import '../styles/Game.css';

// Import audio files
const welcomeAudio = new Audio('/Audio/welcome.mp3');
const welcome2Audio = new Audio('/Audio/welcome2.mp3');
const playAudio = new Audio('/Audio/play.mp3');
const spinAudio1 = new Audio('/Audio/spin.mp3');
const spinAudio2 = new Audio('/Audio/spin2.mp3');

const sequenceImages = [welcome1, welcome2, welcome3];
const gameImages = [money1, money2, money4];

const Game = () => {
    const [stage, setStage] = useState('loadingWhiteMoney');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState([0, 0, 0]);
    const [showResult, setShowResult] = useState(false);
    const [spinToggle, setSpinToggle] = useState(true);

    useEffect(() => {
        welcomeAudio.loop = true;
        welcomeAudio.play();

        return () => {
            welcomeAudio.pause();
            welcomeAudio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        if (stage === 'loadingWhiteMoney') {
            setTimeout(() => setStage('loadingTurbo'), 3000);
        } else if (stage === 'loadingTurbo') {
            setTimeout(() => setStage('loadingSequence'), 3000);
        }
    }, [stage]);

    useEffect(() => {
        if (stage === 'loadingSequence' && currentIndex < sequenceImages.length) {
            const timeout = setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 3000);
            return () => clearTimeout(timeout);
        } else if (currentIndex === sequenceImages.length) {
            setTimeout(() => setStage('gameStart'), 3000);
        }
    }, [stage, currentIndex]);

    const handleGuestPlay = () => {
        welcomeAudio.pause();
        welcomeAudio.currentTime = 0;
        welcome2Audio.loop = true;
        welcome2Audio.play();
    };

    const handlePlayButtonClick = () => {
        welcome2Audio.pause();
        welcome2Audio.currentTime = 0;
        playAudio.play();
    };

    const spinNumbers = () => {
        setSpinning(true);
        setShowResult(false);

        if (spinToggle) {
            spinAudio1.play();
        } else {
            spinAudio2.play();
        }
        setSpinToggle(!spinToggle);

        setTimeout(() => {
            setResult(generateResult());
            setSpinning(false);
            setShowResult(true);
        }, 3000);
    };

    const generateResult = () => {
        const win = Math.random() < 0.2;
        return win ? [1, 5, 0] : [getRandomNumber(), getRandomNumber(), getRandomNumber()];
    };

    const getRandomNumber = () => Math.floor(Math.random() * 10);

    return (
        <div className="game-container">
            {stage === 'loadingWhiteMoney' && <img src={whiteMoneyComing} alt="Loading" className="centered-image" />}
            {stage === 'loadingSequence' && (
                <div className="loading-screen">
                    <img src={sequenceImages[currentIndex]} alt="Loading" className="centered-image" />
                    <p className="loading-text">Loading...</p>
                </div>
            )}
            {stage === 'gameStart' && (
                <div className="game-screen" style={{ backgroundImage: `url(${redBackground})` }}>
                    <img src={slotMachineImage} alt="Slot Machine" className="slot-machine" />
                    <div className="number-display">
                        {spinning ? (
                            <img src={spinningNumbers} alt="Spinning Numbers" className="spinning-animation" />
                        ) : (
                            showResult && (
                                <div className="result-numbers">
                                    {result.map((num, index) => (
                                        <span key={index} className="slot-number">{num}</span>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                  
                    <button className="spin-button" onClick={spinNumbers} disabled={spinning}>Spin</button>
                </div>
            )}
            
        </div>
    );
};

export default Game;
