import InterfaceAPI from "../../interfaces/ApiInterface";

export default function Card({ products }: any): JSX.Element {
  return (
    <div>
      <img
        src={products.photo} 
        alt={products.name}      
      />
      <div>
        <h3>{products.name}</h3>
        <div>{`R$${parseInt(products.price)}`}</div>
      </div>
      <p>{products.description}</p>
      <button 
        type='button'
        >
          COMPRAR
        </button>
    </div>
  )
};
