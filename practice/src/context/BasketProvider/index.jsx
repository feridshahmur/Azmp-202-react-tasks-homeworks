import { createContext, useState } from "react"


export const BasketContext = createContext(null)
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])





    const addToBasket = (product)=>{
        const found = basket.find((q)=>q.id === product.id)
        if(!found){
            setBasket([...basket , {...product , quantity:1}])

        }else{
            found.quantity+=1
            setBasket([...basket])

        }
    }
    const removeBasketItem = (product) => {
        setBasket((prevBasket) => prevBasket.filter((q) => q.id !== product.id))
    }
    const increaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity++
            return [...prevBasket]
        })
    }
    const decreaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity--
            if (found.quantity === 0) {
                return prevBasket.filter((q) => q.id !== product.id)
            }
            return [...prevBasket]
        })
    }
    console.log(basket);
    return (
        <BasketContext.Provider value={{basket , addToBasket, decreaseBasketCount , increaseBasketCount , removeBasketItem}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider