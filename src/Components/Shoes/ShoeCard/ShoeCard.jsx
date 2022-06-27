import React ,{useState} from "react";

const ShoeCard = ({ id, name, image }) => {
  const shoeId = null;
 const [count,setCount]=useState(0);
 const countd=()=>{

  setCount(count+1)
 }
 const contds=()=>{
  if(count>=1){
  setCount(count-1)
  }
}
  return (
    <div data-cy={`shoe-card-wrapper-${id}`}>
      <img data-cy="shoe-card-image" alt="shoe" src={image}/>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{count}</div>
          <button data-cy="increment-shoe-count-button" onClick={countd}>+</button>
          <button data-cy="decrement-shoe-count-button" onClick={contds}>-</button>
        </div>
      </div>
    
    </div>
  );

};

export default ShoeCard;
