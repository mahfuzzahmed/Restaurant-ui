
const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className="absolute right-0 mr-5 px-3 py-1 rounded-lg bg-slate-900 mt-3 text-white">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline border-b-4 mt-7 text-white"> Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;