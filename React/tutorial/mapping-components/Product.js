import React from "react"

const Product = (props) => (<div>
    <p>{props.name}</p>
     <p>Price: <strong>{props.price}</strong></p>
     <p>{props.description}</p>
     <hr/>
    </div>)

export default Product