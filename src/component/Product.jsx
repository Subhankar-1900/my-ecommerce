import React, { useEffect, useReducer, useState } from 'react'
import "../css/product.css"
import { useProduct } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import productReducer from '../reducer/ProductReducer'


function Product() {
  const{products}=useProduct()
  //console.log(products);
  const{cartItems,setCartItems}=useCart()
  const[searchText,setSearchText]=useState("")
  const[filterValue,setFilterValue]=useState("")
  const[filterCategories,setFilterCategories]=useState([])
  const[filterdProduct,dispatch]=useReducer(productReducer,[])
  const[sortValue,setSortValue]=useState()
   
  useEffect(()=>{      //triggered when product changes
    dispatch({type:"addProduct",payload:products})
    let categories =products.map(product =>product.category)
    setFilterCategories(categories.reduce((acc,ele)=>{
    if(!acc.includes(ele)){
      acc.push(ele)
    }
    return acc
    },[]))
  },[products])       // listed as dependencies

  useEffect(()=>{
    let timer =setTimeout(()=>{
    if(searchText){
      console.log(searchText);
      dispatch({type:"search", payload:{searchText:searchText.toLowerCase(),products:products} })
    } 
    else{
    dispatch({type:"addProduct",payload:products})
    }
    },1000)
    return ()=>{
      clearTimeout(timer)
    }
  },[searchText])


  useEffect(()=>{
    if(filterValue){
    dispatch({
      type:"filter",payload:{ filterValue,products}
    })
    }
  },[[filterValue]])

  useEffect(()=>{
    if(sortValue){
    dispatch({type:"z-a",payload:filterdProduct})
    }
  },[sortValue])

  function addToCartHandler(item){
    const isItemAvailable=cartItems.find((product)=>product.id==item.id)
    if(isItemAvailable)
    {
      const newCartItems =cartItems.map((product)=>{
      if(product.id==item.id){
        product.count=product.count+1
      }
      return product
      })
    }
    else{
      const newItem ={...item,count:1}
      setCartItems([...cartItems,newItem])
    }
  }
  
  return (
   <>
      <main  className='product-page'>
        <aside className='product-aside'>
          <div className='search'>
            <label htmlFor="search">Search</label>
            <input type="search" name='search' id='search'  onChange={(e) =>setSearchText(e.target.value)} value={searchText}/>
          </div>
          <div className='filter'>
            <h3>Filter Products</h3>
                 <select name="filter" id="filter"
                 onChange={(event)=>setFilterValue(event.target.value)}>
                  <option value="">Filter...</option>
                  {
                    filterCategories.map(category=>{
                      return(
                        <option value={category} key={category}>{category}</option>
                      )
                    })
                  }
                 </select>
          </div>
          <div className='sort'>
            <h1>Sort</h1>
            <select name="sort" id="sort" onChange={(e)=>setSortValue(e.target.value)}>
              <option value="all">All</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="h-l">high to low</option>
              <option value="l-h">low to high</option>
            </select>

          </div>
        </aside>

       <section className='products'>
        {console.log(cartItems)}
            {
                 filterdProduct.map(product =>{
                  return( <div className="card"   key={product.id*Math.random()} >   
                    <img src={product.images[0]} alt="product"  height={"100px"} width={"200px"}/>
                    <h2>{product.title}</h2>
                    <h3>{product.brand}</h3>
                    <h4>{product.price}$</h4>
                    <div className='buttons'>
                        <button>Buynow</button>
                        <button onClick={()=>{addToCartHandler(product)}}> Add to cart</button>
                    </div>
                     </div>)
                 })
            }
       </section>
       </main>
   </>
  )
}

export default Product