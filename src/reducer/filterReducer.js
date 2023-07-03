const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((currElem) => currElem.price);
            

            // let maxPrice = priceArr.reduce((initialVal, curVal) => Math.max(initialVal, curVal),0);

            let maxPrice = Math.max(...priceArr);
            

            return {
                ...state,
                filter_products: [...action.payload], // [... ] is use bcz after filter the main data does not effect so we give only the copy of data by [...]
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
            };

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
                list_view: true,
            };
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            };

        case "FILTER_PRODUCTS":

            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;

            if (text) {  // if it is change then run
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text);
                });
            }

            // if (category === "All" || company === "All") {
            //     tempFilterProduct = [...all_products];
            // }

            if (category !== "All") {  // if it is change then run and if we click all then not apply filter
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.category === category;
                });
            }
            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.company.toLowerCase() === company.toLowerCase();
                });
            }
            if (color !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.colors.includes(color)
                );
            }

            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price === price
                );
            } else {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                );
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                }
            }
 

        default:
            return state;

    }
};

export default filterReducer;