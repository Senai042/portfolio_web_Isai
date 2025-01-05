
function Card({ data }) {
    return (
        <div className="card-container">
            <div className="card">
                <img className= "card-img" src={data.image} alt={data.title} />
                <h2 className="card-title">{data.title}</h2>
                {data.id === "contactos" ? (
                    <ul className="card-text">
                        <li>{data.gmail}</li>
                        <li>{data.Cellphone}</li>
                        <li>{data.Instagram}</li>
                    </ul>
                ) : (
                    <p className="card-text">{data.description}</p>
                )}
            </div>
        </div>
    );
}

export default Card;

