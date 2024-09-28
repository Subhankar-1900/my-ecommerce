import { createContext,useContext,useEffect,useState} from "react";
import axios from "axios"

const productContext = createContext()
function ProductcontextAPI({children}){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =async ()=>{
        const resopnse =await axios.get("https://dummyjson.com/products?limit=0 ")
        setProducts(resopnse.data.products)
    }
    return (
        <productContext.Provider value={{products,setProducts}}>
             {children}
        </productContext.Provider>
    )

}
export const useProduct =()=>{
    return useContext(productContext)
}
export default ProductcontextAPI
