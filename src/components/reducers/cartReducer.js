import beefShawarma from '../../images/beef-shawarma.jpeg'
import chickenShawarma from '../../images/chicken-sha.jpeg'
import mixedGrill from '../../images/mixed-grill.jpeg'
import veggiePlate from '../../images/veggie-plate.jpeg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_LOCATION,CART_VISIBLE } from './actions/cartActions.js'
import { CHECKOUT } from './actions/checkout.js'
;

const initState = {
    items: [
        
        {id:101,title:'Beef Shawarma', desc: 'Marinated beef, fresh parsley, tomato, onion, pickles, and tahini sauce.', price:8, img: beefShawarma , type: 'entre'},
        {id:102,title:'Chicken Shawarma', desc: 'Thinly sliced marinated chicken, French fries, pickles, and garlic aioli.', price:8, img: chickenShawarma, type: 'entre'},
        {id:103,title:'Lamb Kabob', desc: 'Grilled seasoned lamb kebab, grilled onion, tomato, fresh parsley, mint, Western sumac, and garlicky yogurt sauce.', price:9, style: 'no-image', type: 'entre'},
        {id:104,title:'Shish-Tawook', desc:'Marinated chicken, french fries, tomato, pickles, and garlic aioli.', price:8, style: 'no-image', type: 'entre'},
        {id:105,title:'Mixed Grill Plate', desc: "A generous portion of marinated steak kebab, chicken, kofta with grilled onion, and tomato. Served over pita.", price:17, img: mixedGrill, type: 'entre'},
        {id:106,title:'Kafta', desc: "Grilled seasoned ground beef, grilled onions, parsley, tomato, and hummus.",price:8, style: 'no-image', type: 'entre'},
        {id:107,title:'Shawarma Fries', desc: "Crispy fries topped shwarma with tomato, pickle, onion, parsley, and tahini sauce.", price:9, style: 'no-image', type: 'entre'},
        {id:108,title:'Veggie Plate', desc: "Falafel, tabbouleh, hummus, baba ghanouj, and pita.", price:9,img:veggiePlate, type: 'entre'},
        {id:109,title:'Falafel Pita Wrap', desc: "Fresh parsley, mint, tomato, pickle, and tahini sauce.", price:6, style: 'no-image', type: 'entre'},

        {id:201,title:'Tabbouleh Salad', desc: "Parsley, mint, tomato, onion, crushed wheat, lemon juice, and olive oil.", price:4, style: 'no-image', type: 'side'},
        {id:202,title:'Fattoush Salad', desc: "Leafy greens, tomato, cucumber, onion, radish, parsley, mint, fried pita chips, lemon juice, olive oil, and Western sumac.", price:6, style: 'no-image', type: 'side'},
        {id:203,title:'Baba Ganouj Dip and Pita', desc: "Roasted eggplant, tahini, garlic, lemon juice, olive oil, and Western sumac.",price:4, style: 'no-image', type: 'side'},
        {id:204,title:'Hummus Dip and Pita', desc: "Chickpeas, tahini, garlic, lemon juice, olive oil, and Western sumac.", price:4, style: 'no-image', type: 'side'},
        {id:205,title:'Fries', desc: "Crisp and lightly seasoned.", price:4,style: 'no-image', type: 'side'},

        {id:301,title:'Rose Lemonade', desc: "",price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Topo Chico', desc: "", price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Coke', desc: "",price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Sprite', desc: "", price:1.5, style: 'no-image', deal: false},
        {id:301,title:'Diet Coke', desc: "", price:1.5, style: 'no-image' , type: 'beverage'},
        {id:301,title:'Bottled Water', desc: "",price:1.5, style: 'no-image', type: 'beverage'},
        {id:301,title:'Juice Box', desc: "", price:1.5, style: 'no-image', type: 'beverage'},


        ],
        entres: [ 
           
            {id:101,title:'Beef Shawarma', desc: 'Marinated beef, fresh parsley, tomato, onion, pickles, and tahini sauce.', price:8, img: beefShawarma , type: 'entre'},
            {id:102,title:'Chicken Shawarma', desc: 'Thinly sliced marinated chicken, French fries, pickles, and garlic aioli.', price:8, img: chickenShawarma, type: 'entre'},
            {id:103,title:'Lamb Kabob', desc: 'Grilled seasoned lamb kebab, grilled onion, tomato, fresh parsley, mint, Western sumac, and garlicky yogurt sauce.', price:9, style: 'no-image', type: 'entre'},
            {id:104,title:'Shish-Tawook', desc:'Marinated chicken, french fries, tomato, pickles, and garlic aioli.', price:8, style: 'no-image', type: 'entre'},
            {id:105,title:'Mixed Grill Plate', desc: "A generous portion of marinated steak kebab, chicken, kofta with grilled onion, and tomato. Served over pita.", price:17, img: mixedGrill, type: 'entre'},
            {id:106,title:'Kafta', desc: "Grilled seasoned ground beef, grilled onions, parsley, tomato, and hummus.",price:8, style: 'no-image', type: 'entre'},
            {id:107,title:'Shawarma Fries', desc: "Crispy fries topped shwarma with tomato, pickle, onion, parsley, and tahini sauce.", price:9, style: 'no-image', type: 'entre'},
            {id:108,title:'Veggie Plate', desc: "Falafel, tabbouleh, hummus, baba ghanouj, and pita.", price:9,img:veggiePlate, type: 'entre'},
            {id:109,title:'Falafel Pita Wrap', desc: "Fresh parsley, mint, tomato, pickle, and tahini sauce.", price:6, style: 'no-image', type: 'entre'},
           
        ],

        sides: [ 
           
            {id:201,title:'Tabbouleh Salad', desc: "Parsley, mint, tomato, onion, crushed wheat, lemon juice, and olive oil.", price:4, style: 'no-image', type: 'side'},
            {id:202,title:'Fattoush Salad', desc: "Leafy greens, tomato, cucumber, onion, radish, parsley, mint, fried pita chips, lemon juice, olive oil, and Western sumac.", price:6, style: 'no-image', type: 'side'},
            {id:203,title:'Baba Ganouj Dip and Pita', desc: "Roasted eggplant, tahini, garlic, lemon juice, olive oil, and Western sumac.",price:4, style: 'no-image', type: 'side'},
            {id:204,title:'Hummus Dip and Pita', desc: "Chickpeas, tahini, garlic, lemon juice, olive oil, and Western sumac.", price:4, style: 'no-image', type: 'side'},
            {id:205,title:'Fries', desc: "Crisp and lightly seasoned.", price:4,style: 'no-image', type: 'side'},
       
    ],
       beverages: [ 
           


        {id:301,title:'Rose Lemonade', desc: "",price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Topo Chico', desc: "", price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Coke', desc: "",price:1.5,style: 'no-image', type: 'beverage'},
        {id:301,title:'Sprite', desc: "", price:1.5, style: 'no-image', deal: false},
        {id:301,title:'Diet Coke', desc: "", price:1.5, style: 'no-image' , type: 'beverage'},
        {id:301,title:'Bottled Water', desc: "",price:1.5, style: 'no-image', type: 'beverage'},
        {id:301,title:'Juice Box', desc: "", price:1.5, style: 'no-image', type: 'beverage'},
           
        ],

    
        top: [
            {id:101,title:'Beef Shawarma', desc: 'Marinated beef, fresh parsley, tomato, onion, pickles, and tahini sauce.', price:8, img: beefShawarma , type: 'entre'},
            {id:102,title:'Chicken Shawarma', desc: 'Thinly sliced marinated chicken, French fries, pickles, and garlic aioli.', price:8, img: chickenShawarma, type: 'entre'},
            {id:105,title:'Mixed Grill Plate', desc: "A generous portion of marinated steak kebab, chicken, kofta with grilled onion, and tomato. Served over pita.", price:17, img: mixedGrill, type: 'entre'}
        ],

    

    orderNumber: (Math.round(Math.random() * 10000) + 10000 ),
    addedItems:[],
    total: 0,
    selectedLocation: "Select Location",
    totalUnits: 0,
    isCartVisible: true,

}
const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
   
       if(existed_item)
       {
          addedItem.quantity += 1 
          state.totalUnits += 1
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          state.totalUnits += 1
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      state.totalUnits -= 1
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)

      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
     state.totalUnits += 1
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
       state.totalUnits -= 1
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }
  if(action.type=== SET_LOCATION){
    
     
       let newLocation = action.location
       return{
           ...state,
           selectedLocation: newLocation
       }
 }
 if(action.type=== CART_VISIBLE){
    
     
    let isVisible = action.visible
    return{
        ...state,
        isCartVisible: isVisible
    }
}

 


  return state
}
export default cartReducer;