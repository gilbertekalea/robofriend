import React from "react";
import Card from "../Components/Card.js";

const CardList = ({robots})=>{
    
    const CardsArray = robots.map((user, i)=> { 
        return < Card key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        uni={robots[i].uni}
        />
    });
  return (
      <div>
          {CardsArray}
      </div>
  )
}
export default CardList;

 
