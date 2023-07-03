import styled from "styled-components"
import React from "react"

const Trusted = () => {
    return (
        <Wrapper className="brand-section">
            <div className="container">
                <h3>Trusted by 1000+ companies</h3>
            
            <div className="brand-section-slider">
                <div className="slide">
                    <img
                        src="images/apple.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="images/uber.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="images/microsoft.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="images/amazon.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="images/uniliver.png"
                        alt="trusted-brands"
                    />
                    </div>
                    </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 7rem;
    height: 7rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    //   grid-template-columns: 1fr 1fr;
    //    background-color: red; 
      text-align: center;
    }
  }
`;


export default Trusted