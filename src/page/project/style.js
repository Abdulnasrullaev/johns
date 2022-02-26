import styled from "styled-components";

export const Projected = styled.div`
  width: 100%;

  .title {
    font-size: 31px;
    width: fit-content;
    margin: 20px auto;
    text-transform: capitalize;
  }

  .img-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .images {
      width: fit-content;
      margin: -2px 0;

      img {
        width: 100%;
        height: 350px;
        background-size: 200%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    margin: 0;
    .title {
      text-align: center;
    }

    .img-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

}
       
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const Footer = styled.div`
  width: 100%;

  .card-wrappers {
    background: rgba(237, 237, 237, 1);
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: -2px 0;

    p {
      width: 20%;
      margin: 20px auto;
      padding: 0px 20px;
      color: rgba(163, 163, 163, 1);

      span {
        color: black;
        font-weight: bold;
        font-size: 31px;
      }
    }

    .card {
      width: 60%;
      margin: 20px;
      display: block;

      input {
        width: 100%;
        padding: 14px 5px;
        outline: none;
        border: none;
      }

      textarea {
        width: 100%;
        border: none;
        height: 128px;
        outline: none;
      }

      input::placeholder {
        padding: 10px;
      }

      textarea::placeholder {
        padding: 10px;
      }

      .text {
        background: rgba(247, 247, 247, 1);
      }
    }
  }

  .links {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    text-align: center;

    p {
      margin: 0px 250px;
    }

    .link-wrap {
      margin: 0px 80px;
      width: fit-content;

      img {
        margin: 0px 10px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .card-wrappers {
      margin: auto;
      width: 100%;
      display: flow-root;

      p {
        width: fit-content;
      }

      .card {
        margin: 10px auto;
        width: 90%;
      }
    }

    .links {
      p {
        width: fit-content;
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .links {
      width: 100%;
      justify-content: center;
      display: grid;

      p {

        width: fit-content;
        margin: 10px auto;
      }

      .link-wrap {
        width: 100%;
        margin: auto;
      }
    }
  }
`