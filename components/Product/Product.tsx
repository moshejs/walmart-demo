import ImgBadge from '../ImgBadge'
import './product.scss'

const Product = ({ product }) => (
  <div className="product">
    <div className="moreBadgeContainer">
      {product.more_choices && <div className="moreBadge">More Choices</div>}
    </div>

    <img src={product.image_url} className="productImg" />
    {product.type && <ImgBadge itemType={product.type} />}

    <div className="priceContainer">
      <div className="itemName">{product.name}</div>
      <div className="originalPrice">{product.original_price}</div>
    </div>
    <div className="priceContainer">
      <div className="itemDescription">{product.description}</div>
      <div className="price">
        <span className={product.original_price ? 'discountPrice' : 'price'}>
          {product.price}
        </span>
      </div>
    </div>
  </div>
)

export default Product
