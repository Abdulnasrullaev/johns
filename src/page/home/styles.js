import styled from "styled-components";
import background from '../../assest/background.png'

export const NavBar = styled.div`
  width: 100%;

  p {
    margin: 20px 250px;
    font-size: 25px;
  }

  @media screen and ( max-width: 768px) {
    width: 100%;
    p {
      width: fit-content;
      margin: 20px auto;
    }
  }
  @media screen and ( max-width: 480px) {
    width: 100%;
    p {
      width: fit-content;
      font-size: 20px;
      margin: 20px auto;
    }
  }
`

export const About = styled.div`
  width: 100%;
  background-size: cover;
  background-image: url(${background});
  color: white;
  background-color: rgba(253, 110, 110, 0.4);

  p {
    position: sticky;
    width: fit-content;
    padding: 170px 250px;
    font-size: 47px;

  }

  .buttons {
    margin: 20px -23px;

    button {
      font-size: 18px;
      color: white;
      background: transparent;
      border: 2px solid white;
      margin: 10px 30px;
      text-transform: capitalize;
      width: fit-content;
      padding: 10px 13px;
    }
  }

  @media screen and ( max-width: 768px) {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    p {
      font-size: 34px;
      width: fit-content;
      padding: 100px;

    }

    .buttons {
      button {
        padding: 7px 20px;

      }
    }
  }
  @media screen and ( max-width: 480px) {
    width: 100%;
    background-size: cover;
    p {
      font-size: 24px;
      width: fit-content;

    }

    .buttons {
      width: fit-content;
      display: flex;

      button {
        margin: 0px 5px;
        font-size: medium;
        width: fit-content;
        padding: 7px;
      }
    }
  }
`

export const Details = styled.div`
  width: 100%;
  background: rgba(237, 237, 237, 1);
  justify-content: center;
  display: flex;

  .help {
    width: fit-content;
    margin: 40px auto;
    font-size: 31px;
  }

  .degree {
    width: 639px;
    margin: 40px auto;

    .lorem {
      margin: 10px 0 20px 0;
    }

    .degrees {
      text-transform: uppercase;
      width: 100%;
      margin: 20px 0;
      background: #F7F7F7;;

      p {
        background: rgb(217, 217, 217);
        width: 100%;
        padding: 10px 0;
        text-anchor: start;
       text-align: justify;
      }

      .responsive {
        width: 90%;
      }

      .ui {
        width: 70%;
      }

      .mobile {
        width: 40%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flow-root;
    .degree{
      width: fit-content;
      padding: 20px;
      .degrees{
        width: available;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
