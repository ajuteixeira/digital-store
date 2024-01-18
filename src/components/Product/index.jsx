const Product = ({ classes, name, categoryName, discount, price }) => {
    return (
        <>
            <div className={`bg-white p-3 border-round-sm shadow-1 reltive ${classes}`}>
                {
                    discount != 0 && (
                        <div className="absolute font-bold px-2 py-1 border-round-2xl uppercase text-xs" style={{ backgroundColor: "#e7ff86" }}>{discount}% off</div>
                    )
                }
                <img className="w-full" src="https://gdlp.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/q/bq4422-001_2_1.jpg" alt="" />
            </div>
            <h6 className="mt-3 text-xs text-600">{categoryName}</h6>
            <h3 className="my-1 font-light text-800">{name}</h3>
            <h3>
                {
                    discount != 0 && (
                        <del className="font-light text-500">{price}</del>
                    )
                }
                R${price - ((price / 100) * discount)}
            </h3>
        </>
    )
}

export default Product;