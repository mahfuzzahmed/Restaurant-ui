
const MenuItem = ({ item }) => {
    const { image, name, price, category, recipe } = item
    return (
        <div className="flex items-center justify-center gap-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]"  src={image} alt="" />
            <div>
                <h1 className="text-3xl">{name}........................</h1>
                <p className="">{recipe}</p>
            </div>
            <div>
                <h1 className="text-yellow-500">Price : {price}</h1>
            </div>
        </div>
    );
};

export default MenuItem;