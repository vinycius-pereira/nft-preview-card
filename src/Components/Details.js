import style from "./Details.module.css";
import styled from "styled-components";

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin: 0 0 15px 0;

  :hover {
    cursor: pointer;
    color: hsl(178, 100%, 50%)
  }
`

const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 25px;
`

const Attribute = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

const Separator = styled.hr`
  border: 1px solid hsl(215, 32%, 27%);
  font-weight: lighter;
  width: 340px;
  margin: 0;
`

const Creator = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 25px 0;
`

const About = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  margin: 0 0 15px 0;
`

const Currency = styled.div`
  display: flex;
  color: hsl(178, 100%, 50%);
  margin-right: 128px;
`

const ExpireCounter = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.5);
`

const Author = styled.p`
  color: rgba(255, 255, 255, 0.5);
`
const Name = styled.span`
  color: rgb(255, 255, 255);

  :hover {
    cursor: pointer;
    color: hsl(178, 100%, 50%)
  }
`

const Details = ({details}) => {
    const {about, creator, expireDate, price, title} = details

    return (
        <Description>
            <Title>{title}</Title>
            <About>{about}</About>
            <Attribute>
                <Currency>
                    <img src="public/../images/icon-ethereum.svg" alt="Ethereum icon" className={style.ethereumIcon}/>
                    <p>{price}</p>
                </Currency>
                <ExpireCounter>
                    <img src="public/../images/icon-clock.svg" alt="Clock icon" className={style.clockIcon}/>
                    <p>{expireDate}</p>
                </ExpireCounter>
            </Attribute>
            <Separator/>
            <Creator>
                <img src="public/../images/image-avatar.png" alt="Avatar" className={style.avatar}/>
                <Author>Creation of <Name>{creator}</Name></Author>
            </Creator>
        </Description>
    )
}

export default Details