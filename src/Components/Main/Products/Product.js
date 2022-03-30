import { useTranslation } from "react-i18next";

const Product = ({ product, onAdd }) => {
    const { t } = useTranslation();
    const {name,priceBig} = product.fields;


    const addProductToCart = (product,e)=>{
        onAdd(product, e)
    }

    
    return (
        <>
            <div className="product">
                <div className="productDesc">
                    <div className="price-rate">
                        <div className="name">{name}</div>
                        <p className="price">${priceBig}</p>
                    </div>
                    
                    <button className="placeOrder">
                        <span className="mainAddToCartButton" onClick={(e)=>addProductToCart(product, e)}>{ t("other_products.buy") }</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Product
