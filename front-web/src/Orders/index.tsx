import { useEffect, useState } from 'react'
import './styles.css'
import StepsHeader from './StepsHeader'
import ProductList from './ProductList'
import { OrderLocationdata, Product } from './types'
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation'
import OrderSummary from './OrderSummary'
import Footer from '../Footer'
import { checkIsSelected } from './helpers'

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [, setOrderLocation] = useState<OrderLocationdata>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    // HANDLE SELECT ******
    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    // ****** END HANDLE SELECT
    
      
    return (
        <>
        <div className="orders-container">
            <StepsHeader />
            <ProductList 
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
            />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)}/> 
            
            <OrderSummary 
            amount={selectedProducts.length}
            totalPrice={totalPrice}
            onSubmit={Boolean}
            
            />
            
        </div>
        <Footer />
        </>
    )
}

export default Orders