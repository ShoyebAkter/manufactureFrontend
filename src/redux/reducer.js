const INITIAL_STATE = {
    carts: []
}


export const cartreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            console.log("add cart");
            const IteamIndex = state.carts.findIndex((iteam) => (iteam.name === action.payload.name) ? iteam.id === action.payload.id : "");
            const temp = { ...action.payload, qnty: 1,shopId:action.shopId,userId:action.userId };
            console.log(action.payload);
            console.log(temp);
            console.log(IteamIndex)
            if (IteamIndex >= 0) {

                console.log(action.payload.id);
                console.log(state.carts[IteamIndex].id);
                if (state.carts[IteamIndex].id === action.payload.id) {
                    state.carts[IteamIndex].qnty += 1
                    console.log("hi");
                    return {
                        ...state,
                        carts: [...state.carts]
                    }
                }
                else {
                    return {
                        ...state,
                        carts: [...state.carts, temp]
                    }
                }
            }
            else {
                console.log("hi else"); 
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "DLT_CART":
            const data = state.carts.filter((el) => el.id !== action.payload)

            return {
                ...state,
                carts: data
            }


        case "RMV_ONE":
            console.log(action.payload);
            const ItemIndex_dec =  state.carts.findIndex((iteam)=>(iteam.id===action.payload.id) ? iteam.id === action.payload.id :"");
            // const ItemIndex_dec = state.carts.findIndex((iteam) => console.log(iteam));
            console.log(ItemIndex_dec);
            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1

                // console.log("redux",[...state.carts,dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
            else if (state.carts[ItemIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }
            break;
        case "DLT_ONE":
            console.log(action.payload);
            const cartData = state.carts.filter((el) => el.id !== action.payload);

            return {
                ...state,
                carts: cartData
            }





        default:
            return state
    }
}