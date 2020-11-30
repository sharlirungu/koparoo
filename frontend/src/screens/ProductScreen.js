import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find(x=>x._id === props.match.params.id);
    if(!product) {
        return <div>Product not found</div>
    }
    return(
        <div>
            <Link to="/">Go Back</Link>
            <div className="row top">
            <div className="col-2">
                <img class="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    </li>
                    <li>
                        Price: Ksh{product.price}
                    </li>
                    <li>
                        Description:
                        <p>{product.description}</p>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">Ksh{product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                {product.countInStock>0? (
                                <span className="success">Available</span>
                                ):(
                                <span className="danger">Unavailable</span>)
                                }
                                </div>
                            </div>
                        </li>
                        <button className="primary block">Add to Cart</button>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}