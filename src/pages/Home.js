import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import slotMachine from '../assets/background.png';  // Import image
import whiteMoneyComing from '../assets/white_money_coming.jpg';

// Import audio
const welcomeAudio = new Audio('/Audio/welcome.mp3');

const Home = () => {
    useEffect(() => {
        welcomeAudio.loop = true;
        welcomeAudio.play();

        return () => {
            welcomeAudio.pause();
            welcomeAudio.currentTime = 0;
        };
    }, []);

    const handleGuestPlay = () => {
        welcomeAudio.pause();
        welcomeAudio.currentTime = 0;
    };

    return (
        <div style={styles.container}>
            <img src={whiteMoneyComing} alt="White Money Coming" style={styles.topImage} />
            <h1> Money Coming </h1>
            <img src={slotMachine} alt="Slot Machine" style={styles.image} />
            <p>Experience the best slot machine game online!</p>
            
            <div style={styles.buttonContainer}>
                <Link to="/login">
                    <button style={styles.button}>Login</button>
                </Link>
                <Link to="/register">
                    <button style={styles.button}>Register</button>
                </Link>
                <Link to="/game">
                    <button style={styles.button} onClick={handleGuestPlay}>Play as Guest</button>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        height: '100vh',
    },
    topImage: {
        width: '100%',
        maxHeight: '200px',
        objectFit: 'cover',
        marginBottom: '20px',
    },
    image: {
        width: '300px',
        margin: '20px 0',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
    },
};

export default Home;