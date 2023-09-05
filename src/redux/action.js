export const ADD=(item,id,userId)=>{
    // console.log(item);
    return{
        type: "ADD_CART",
        payload:item,
        shopId:id,
        userId:userId
    }
}
export const DLT=(id)=>{
    return{
        type: "DLT_CART",
        payload:id
    }
}
export const DLTONE=(id)=>{
    return{
        type: "DLT_ONE",
        payload:id
    }
}
export const REMOVE = (item) => {
    // console.log(item);
    return {
        type: "RMV_ONE",
        payload: item
    }
}