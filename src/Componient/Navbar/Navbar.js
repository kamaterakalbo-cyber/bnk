import styled from "styled-components";





export const Nav = styled.nav`
font-family: "Zalando Sans Expanded", sans-serif;

background-color: #f2faff;
text-transform: capitalize;
position: fixed;
width: 100%;
right: 0;
top: 0;
left: 0;
z-index: 9999;

.Nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    cursor: pointer;
    padding: 10px 0px;
}

.navleft{
    width: 120px;
}

.navleft img{
    width: 100%;
}

ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    cursor: pointer;
     font-size: 15px;
}

li:hover{
 color: #106f9e;

}

.navright{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    font-size: 15px;
}

.navright span{
color:#0488cb ;
font-size: 16px;
}
.navright button{
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    background-color:#0488cb ;
    color: white;
    cursor: pointer;
    font-size: 15px;
}

.navright button:hover{
    background-color: #106f9e;
}
`