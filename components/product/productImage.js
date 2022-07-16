const ProductImage = ({ className, imageUrl, altText }) => (
  <picture>
    <source src={imageUrl} type="image/jpeg"></source>
    <img className={className} src={imageUrl} alt={altText} height="100%" />
  </picture>
)

export default ProductImage
