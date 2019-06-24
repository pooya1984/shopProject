// IMPORT THIS ITEMS FROM JSON FILE
import {
    products,
    card
} from '../api/products.json'
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    CHECK_OUT,
} from '../actions/action-types/card-actions'


const initState = {
    products,
    card
}
const cartReducer = (state = initState, action) => {
    // console.log('cardReducer',state.products,card)

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
            
        // GET the addedItem with the given id by action.id
        let addedItem = state.products.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.card.addedItems.find(item=> action.id === item.id)


       if(existed_item)
            {
                addedItem.quantity += 1 
            return{
                ...state,  
                products,                   
                card: {
                    addedItems: [...state.card.addedItems],
                    total : state.card.total + addedItem.price 

                } 
               
            }
        }
        else{
            addedItem.quantity = 1;
         //calculating the total
         
          let newTotal = state.card.total + addedItem.price 
    
            return{
                ...state,
                products,                        
                card: {
                    addedItems: [...state.card.addedItems, addedItem],
                    total : newTotal  

                }                        
                            
            }
    
        }   

    }
   
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.products.find(item => action.id === item.id)
        let new_items = state.card.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.card.total - (itemToRemove.price * itemToRemove.quantity)
        itemToRemove.quantity = 0
        // console.log(itemToRemove)
        return {
            ...state,
            products,
            card: {
                addedItems: new_items,
                total: newTotal
            }
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.products.find(item => item.id === action.id)
          console.log('addedItems', addedItem)
        if (addedItem.quantity < addedItem.maxQuantity)
            addedItem.quantity += 1
        let newTotal = state.card.total + addedItem.price
        return {
            ...state,
            products,
            card: {
                addedItems: state.card.addedItems,
                total: newTotal

            }
        }
    }
    if (action.type === SUB_QUANTITY) {

        let addedItem = state.products.find(item => item.id === action.id)
        console.log(addedItem.quantity)

        if (addedItem.quantity > 1) {
            addedItem.quantity -= 1
            let newTotal = state.card.total - addedItem.price
            return {
                ...state,
                products,
                card: {
                    addedItems: state.card.addedItems,
                    total: newTotal

                }


            }
        }

        if (addedItem.quantity === 1) {
            addedItem.quantity = 1
            let newTotal = state.card.total
            return {
                ...state,
                products,
                card: {
                    addedItems: state.card.addedItems,
                    total: newTotal

                }


            }
        }

        }

        //TODO: BUILD A CHECKOUT FUNCTION
        if (action.type === CHECK_OUT) {
            let itemToRemove = state.products.find(item => action.id === item.id)
            let new_items = state.card.addedItems.filter(item => action.id !== item.id)
            let q = itemToRemove.quantity
    
            //calculating the total
            let newTotal = state.card.total - (itemToRemove.price * itemToRemove.quantity)
            itemToRemove.quantity = 0
            itemToRemove.maxQuantity = itemToRemove.maxQuantity - q
            // console.log(itemToRemove)
            return {
                ...state,
                products,
                card: {
                    addedItems: new_items,
                    total: newTotal
                }
            }
        }

    return state
}

export default cartReducer