import React from 'react';
import AppBarComp from '../components/AppBarComp';
import { getAllAnimals }  from '../services/AnimalsService';

const Home = () => {

    const [animals, setAnimals] = React.useState([]);

    React.useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const data = await getAllAnimals();
                setAnimals(data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };
        fetchAnimals();
    }, []);

    return (
        <>
            <AppBarComp />
            <div className="home-page">
            <h1>Welcome to Animal Rescue</h1>
              <p>
                We are dedicated to rescuing and finding loving homes for animals in need.
              </p>
            </div>
            <div className="animal-list">
                <h2>Available Animals</h2>
                {animals.length > 0 ? (
                    <ul>
                        {animals.map(animal => (
                            <li key={animal.id}>
                                <h3>{animal.firstName} {animal.lastName} {animal.animalType} {animal.gender}</h3>
                                <p>Intake: {animal.intakeDate}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No animals available at the moment.</p>
                )}
            </div>
        </>
  );
};

export default Home;