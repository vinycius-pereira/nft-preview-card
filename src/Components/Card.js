import styled from 'styled-components'
import Artwork from "./Artwork";
import Details from "./Details";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: hsl(216, 50%, 16%);
  width: 390px;
  height: 598px;
  border-radius: 10px;
  font-family: 'Outfit', sans-serif;
  color: white;
  font-size: 18px;
`

const Card = ({data}) => {
    return (
        <Container>
            <Artwork art={data}/>
            <Details details={data}/>
        </Container>
    )
}

export default Card