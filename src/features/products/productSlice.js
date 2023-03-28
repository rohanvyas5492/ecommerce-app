import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://fakestoreapi.com/products';
const initialState = {
    productItems:[],
    filteredItems:[],
    singleProduct:'',
    amount:0,
    total:0,
    isLoading:true,
    minPrice:0,
    maxPrice:0,
    price:0
}

export const getProducts = createAsyncThunk('product/getProducts',()=>{
    return fetch(url).then(resp=>resp.json()).catch(err=>console.log(err));
})

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        filterProducts(state,action){
            state.isLoading = true;
            try {
                 const filter = state.productItems.filter((product)=>{
                     return product.category === action.payload;
                 })
                state.filteredItems = filter;
            } catch (error) {
                return error;
            }
            state.isLoading = false;
        },
        clearFilter(state){
          state.filteredItems = state.productItems;
        },
        findPrice(state){
            if(!state.isLoading){
            const priceArr = state.filteredItems.map((p)=>{
                return Number(p.price);
            })
            // const totalPrice = priceArr.reduce((acc,p)=>{
            //     return acc+p;
            // })
            const minPrice = Math.min(...priceArr);
            const maxPrice = Math.max(...priceArr);
            state.minPrice = minPrice;
            state.maxPrice = maxPrice;
            }
        },
        updatePriceFilter(state,action){
            state.price = Number(action.payload);
            state.isLoading = true;
            try {
                 const filter = state.productItems.filter((product)=>{
                     return product.price <= action.payload;
                 })
                state.filteredItems = filter;
                state.isLoading = false;
            } catch (error) {
                return error;
            }
        },
        singleProduct(state,action){
            try {
                const oneProduct = state.productItems.filter((product)=>{
                    return product.id === action.payload;
                })
                state.singleProduct = oneProduct;
                console.log(oneProduct)
            } catch (error) {
                return error;
            }
        }
    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.isLoading = true;
        },
        [getProducts.fulfilled]:(state,action)=>{
            console.log(action);
            state.isLoading = false;
            state.productItems = action.payload;
            state.filteredItems = action.payload;
        },
        [getProducts.rejected]:(state)=>{
            state.isLoading = false;
        }
    }
})

export const {filterProducts,clearFilter,findPrice,updatePriceFilter,singleProduct} = productSlice.actions;
export default productSlice.reducer