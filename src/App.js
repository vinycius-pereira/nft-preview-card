import './App.css';
import styled from "styled-components";
import Card from './Components/Card'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  width: auto;
`

function App() {

  const nftCard = {
    creator: "Jules Wyvern",
    title: "Equilibrium #3429",
    about: "Our Equilibrium collection promotes balance and calm",
    price: "0.041 ETH",
    expireDate: "3 days left",
    image: "public/../images/image-equilibrium.jpg"
  }

  return (
      <Main>
        <Card data={nftCard}/>
      </Main>
  );
}

export default App;
