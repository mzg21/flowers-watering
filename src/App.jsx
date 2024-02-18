import { useState } from 'react';

import MainContainer from './components/MainContainer';
import Header from './components/Header/Header';
import Nav from './components/Header/Nav';
import Logo from './components/Header/Logo';
import Settings from './components/Header/Settings';
import FlowersList from './components/Flowers/FlowersList';
import FlowerDetails from './components/Flowers/FlowerDetails';

export default function App() {
  const [showWindow, setShowWindow] = useState(false);
  const [flowers, setFlowers] = useState({ flower: {}, flowers: [] });

  function handleAddFlower(flower) {
    setFlowers(prevFlowers => {
      return {
        flower: flower,
        flowers: [flower, ...prevFlowers.flowers],
      };
    });
  }

  function handleShowWindow() {
    setShowWindow(prevValue => !prevValue);
  }

  function handleDisplayFlowers() {
    console.log('display flowers');
  }

  return (
    <div className="flex w-full justify-center items-center">
      <MainContainer>
        <Header>
          <Nav
            addFlower={handleAddFlower}
            showWindow={handleShowWindow}
            isWindowDisplayed={showWindow}
            displayFlowers={handleDisplayFlowers}
          />
          <Logo />
          <Settings />
        </Header>
        <main className="flex gap-4 min-h-main">
          <FlowersList flowers={flowers} />
          <FlowerDetails />
        </main>
      </MainContainer>
    </div>
  );
}
