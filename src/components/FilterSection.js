import React from 'react'
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/Filter_context';
import FormatPrice from "../helper/FormatPrice"
import {Button} from "../styles/Button"

const FilterSection = () => {
  const { filters: { text, color,minPrice,maxPrice,price}, updateFilterValue, all_products,clearFilters } = useFilterContext();

  // to get the unique data of each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];  // it returns only the property in whole data like we display category then mobile laptop... so on will display
    });
    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
      // return newVal = newVal.flat();
    }
    else {
      return newVal = ["All", ...new Set(newVal)]; // set ds is used to get the unique data
    }
  };


  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' placeholder="Search" value={text} onChange={updateFilterValue} />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((currElem, index) => {
              return <button key={index} type='button' name='category' onClick={updateFilterValue} value={currElem}>
                {currElem}
              </button>
            })
          }
        </div>
      </div>


      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">


          <select className="filter-company--select" name="company" id="company" onClick={updateFilterValue}>
            {
              companyData.map((currElem, index) => {
                return (
                  <option key={index} value={currElem} name="company">{currElem}</option>
                );
              })
            }

          </select>


        </form>
      </div>

      <div className="filter-colors colors">

        <h3>Colors</h3>

        <div className="filter-color-style">
          {
            colorsData.map((currColor, index) => {
              if (currColor === 'All') {
                return (
                  <button key={index} name='color' value={currColor} onClick={updateFilterValue} type='button' className='color-all--style'>
                    all
                  </button>
                );
              }
              return (
                <button key={index} name='color' value={currColor} onClick={updateFilterValue} type='button' style={{ backgroundColor: currColor }} className={color === currColor ? "btnStyle active" : "btnStyle"}>
                  {color === currColor ? <FaCheck className="checkstyle" /> : null}
                </button>
              );
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price}/>
        </p>
          <input
            type="range"
            name='price'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        
      </div>

      <div className="filter-clear">
        <Button type='button' className='btn' onClick={clearFilters} >Clear Filter</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection