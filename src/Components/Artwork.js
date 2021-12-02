import styled from 'styled-components'
import style from "./Artwork.module.css";

const Image = styled.div`
  display: flex;
  justify-items: center;
  margin: 25px 0 15px 0;
  border-radius: inherit;
`
const ViewDetails = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border-radius: inherit;
  color: white;
  opacity: 0;
  margin: 0;
  cursor: pointer;

  :hover {
    opacity: 0.2;
    background-color: hsl(178, 100%, 50%);
  }
`

const Artwork = ({art}) => {
    const {image} = art

    return (
        <Image>
            <img src={image} alt="NFT art" className={style.ntfImage}/>
            <ViewDetails>
                <img src="public/images/../icon-view.svg" alt="eye icon"/>
            </ViewDetails>
        </Image>
    )
}

export default Artwork