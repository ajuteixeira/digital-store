const Product = ({ classes, name, image, categoryName, discount, price }) => {
    return (
        <>
            <div className={classes} style={{width: 'calc(33.333% - 11px)'}}>
                <div className={`bg-white p-3 border-round-sm shadow-1 reltive`}>
                    {
                        discount != 0 && (
                            <div className="absolute font-bold px-2 py-1 border-round-2xl uppercase text-xs" style={{ backgroundColor: "#e7ff86" }}>{discount}% off</div>
                        )
                    }
                    <img className="w-full" style={{height: '266px', objectFit: 'contain'}} src={image} alt="" />
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
            </div>
        </>
    )
}

export default Product;