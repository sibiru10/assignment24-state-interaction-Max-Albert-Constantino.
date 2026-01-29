import React from 'react';
import './App.css';
import Task1Counter from './Task1Counter';
import Task2Toggle from './Task2Toggle';
import Task3Login from './Task3Login';
import Task4FruitList from './Task4FruitList';
import Task5AddList from './Task5AddList';
import Task6LiftingState from './Task6LiftingState';
import Task7SimpleForm from './Task7SimpleForm';

function App() {
  return (
    <div className="App" style={styles.mainContainer}>
      <h1 style={{ color: 'white' }}>Assignment 4: State & Interaction</h1>
      
      <Section title="Counter">
        <Task1Counter />
      </Section>

      <Section title="Toggle Message">
        <Task2Toggle />
      </Section>

      <Section title="Login Status">
        <Task3Login />
      </Section>

      <Section title="Fruit List">
        <Task4FruitList />
      </Section>

      <Section title="Add Item">
        <Task5AddList />
      </Section>

      <Section title="Lifting State Up">
        <Task6LiftingState />
      </Section>

      <Section title="Simple Form">
        <Task7SimpleForm />
      </Section>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div style={styles.card}>
    <h2 style={{ marginTop: 0, borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
      {title}
    </h2>
    <div style={styles.cardContent}>
      {children}
    </div>
  </div>
);

const styles = {
  mainContainer: {
    backgroundColor: 'black',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '500px', 
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '12px', 
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)', 
    textAlign: 'center' 
  },
  cardContent: {
    marginTop: '15px'
  }
};

export default App;