import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiTacos, GiIndianPalace, GiCroissant  } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"} cy="ACERO">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={"/cuisine/Mexican"}>
                <GiTacos />
                <h4>Mexican</h4>
            </SLink>
            <SLink to={"/cuisine/Indian"}>
                <GiIndianPalace  />
                <h4>Indian</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/French"}>
                <GiCroissant />
                <h4>French</h4>
            </SLink>
        </List>
    )
}


const List = styled.div`
display: flex;
justify-content: center ;
margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin: 0rem 1rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}

svg{
    color:#fff;
    font-size: 1.5rem;
}

&.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}

`;
export default Category

