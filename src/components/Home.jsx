import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cardActions'


class Home extends Component {

  handleAdd = (id) => {
    this.props.addToCart(id);
  }


  render() {

    const { products } = this.props.products;
    //  console.log('product', this.props.products)

    const productList = products.map(pro => {
      console.log(pro.quantity)
      return (
        <li className='home-container' key={pro.id}>
          <div>
            <img src={pro.img} alt={pro.title} />
          </div>
          <div className='desc-container'>
            <span><b>{pro.title}</b></span>
            <p>{pro.desc}</p>
            <p>Price: ${pro.price}</p>
          </div>
          <div>
            {(pro.maxQuantity - pro.quantity > 0) ?
            (<button className='glyphicon glyphicon-shopping-cart'
              onClick={() => { this.handleAdd(pro.id) }}> {pro.maxQuantity - pro.quantity} </button>)
              :  (pro.maxQuantity === pro.quantity)?(<button className="btn btn-danger pull-right ml-auto">Sold out</button>):(null)
            }
          </div>

        </li>
      )
    })



    return (
      <div >
        <div className='container'>{productList}</div>
      </div>
    )
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
    addToCart: (id) => { dispatch(addToCart(id)) },
    // checkOut: (id)=>{dispatch(checkOut(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

