import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity,checkOut } from '../actions/cardActions'
class Cart extends Component {





    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    handleCheckout = (id) => {
        this.props.checkOut(id);
      };


    render() {
        let imgStyle = {
            width: '50%',
            color: 'gray'
        }

        let empty = {
            fontSize: '100px',
            textAlign: 'center',
        }
        // console.log('Cart',this.props.card)
        const { addedItems } = this.props.card.card;
        // console.log(addedItems.length)
        if (addedItems.length > 0) {
            const itemsInCard = addedItems.map((item) => {
                // console.log('item',item.quantity)
                return (

                    <div key={item.id} style={imgStyle} className="jumbotron">
                        <h5 className="display-3">{item.title}</h5>
                        <hr />
                        <div className="row">

                            <div className="col col-md-6">
                                <h5>Image & Likes</h5>
                                <hr />
                                <img src={item.img} style={imgStyle} className="img-thumbnail" alt="jacket img" />
                                <p className="btn btn-dark pull-right ml-auto"><i className="fas fa-heart"></i> <span className="badge badge-dark"> {item.likes}</span></p>
                            </div>
                            <div className="col col-md-6">
                                <h5>Description</h5>
                                <hr />
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col col-md-4">

                                <p className="text-dark">

                                    <button className="btn btn-dark pull-right mr-auto" onClick={() => { this.handleSubtractQuantity(item.id) }}><i className="fas fa-caret-down"></i></button>
                                    <span className="item-counter">{item.quantity}</span>
                                    <button className="btn btn-dark pull-right ml-auto" onClick={() => { this.handleAddQuantity(item.id) }}><i className="fas fa-caret-up"></i></button>
                                </p>
                            </div>
                            <div className="col col-md-4">
                                <p className="text-dark">
                                    <button className="btn btn-dark pull-right ml-auto" onClick={() => { this.handleRemove(item.id) }}><i className="far fa-trash-alt"></i></button>
                
                                   <div > <button className="btn btn-dark pull-buttom ml-auto " onClick={()=>{this.handleCheckout(item.id)}}><i className="fa fa-credit-card"></i></button>  </div> 
                                </p>
                            </div>
                            <div className="col col-md-4">
                                <p className="text-dark"><b><u>Price: {item.price * item.quantity} $</u></b></p>
                            </div>

                        </div>


                    </div>
                )

            })

            return (
                <div className="container">
                    {itemsInCard}
                </div>

            )

        } else {
            return (<div className='container'> <p style={empty}>your cart is Empty!</p> </div>)
        }



    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        card: state.card
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
        checkOut: (id)=>{dispatch(checkOut(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
