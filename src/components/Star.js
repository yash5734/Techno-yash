import React from 'react'
import ReactStars from 'react-stars'
import styled from 'styled-components'

const Star = ({ stars, reviews }) => {
    return (
        <Wrapper>
            <div className="icon-style">
                <ReactStars
                    size={30}
                    half={true}
                    value={stars}
                    // onChange={(rate) => setRating(rate)}
                    edit={false}
                />
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star