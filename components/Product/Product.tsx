import ImgBadge from "../ImgBadge";
import "./product.scss";

const Product = ({ product }) => (
  <div className="productStyle">
    <div className="moreBadgeContainerStyle">
      {product.more_choices && (
        <div className="moreBadgeStyle">More Choices</div>
      )}
    </div>

    <img src={product.image_url} className="imgStyle" />
    {product.type && <ImgBadge itemType={product.type} />}

    <div className="container">
      <div className="itemName">{product.name}</div>
      <div className="originalPrice">{product.original_price}</div>
    </div>
    <div className="container">
      <div className="itemDescription">{product.description}</div>
      <div className="priceContainer">
        <span className={product.original_price ? "discountPrice" : "price"}>
          {product.price}
        </span>
      </div>
    </div>
  </div>
);

export default Product;
