import React,{createContext,useState,useEffect} from 'react';

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
      const reponse = await fetch('https://fakestoreapi.com/products');
      const data = await reponse.json();
      setProducts(data)
    }

    fetchProducts();
    
  },[])
  return <ProductContext.Provider value={{products}
} >
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
