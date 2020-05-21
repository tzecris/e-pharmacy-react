import React, { Component } from 'react';
import Cart from './Cart';
import CustomerService from '../../services/customerService'
import CustomerInfo from './CustomerInfo';
import Payment from './Payment';

class CheckoutForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            order: {
                productListDTO: [],
                addressInfo: '',
                customerId: '',
                payment:''
            },
            addressInfo: {}


        };

    }







    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (user === null) return;
        const result = await CustomerService.getByUsername(user.username)
        let customer = {
            firstName: result.firstName,
            lastName: result.lastName,
            address: result.address || {
                city: '',
                streetName: '',
                streetNumber: '',
                region: '',
                zipCode: ''
            }
        }

        this.setState({
            order: {
                ...this.state.order,
                customerId: result.personId,
                productListDTO: cart
            },
            addressInfo: customer
        });
    }


    onChangeQuantity = () => {
        let cartItems = localStorage.getItem("cart");
        if (cartItems) {
            cartItems = JSON.parse(cartItems);
            let total = 0;
            if (cartItems) {
                this.setState({
                    order: {
                        ...this.state.order,
                        productListDTO: cartItems
                    },
                })
            }
        }
    }


    removeCartItem = (id) => {
        let cartItems = localStorage.getItem("cart");
        if (cartItems) {
            cartItems = JSON.parse(cartItems);
            cartItems.map((item, index) => {
                if (item.productId === id) {
                    cartItems.splice(index, 1);
                }
            })
            localStorage.setItem("cart", JSON.stringify(cartItems))

            this.setState({
                order: {
                    ...this.state.order,
                    productListDTO: cartItems
                },
            })
        } else {
            this.setState({
                order: {
                    ...this.state.order,
                    productListDTO: []
                },
            })
        }
    }




    goToNext = () => {
        const { step } = this.state;
        if (step !== 3) {
            this.setState({ step: step + 1 });
        } else {
            alert("Submitting");
            this.submitOrder();
        }
    }

    goToPrevious = () => {
        const { step } = this.state;
        if (step !== 1) {
            this.setState({ step: step - 1 });
        }
    }

    submitOrder = () => {
        this.state.order.addressInfo = JSON.stringify(this.state.addressInfo);
        console.log(this.state.order);
    }

    paymentHandler = (event) => {
          const value = event.target.value;
        this.setState({
            order: {
                ...this.state.order,
                payment: value
            },
        })
      

    }


    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name.indexOf('address.') >= 0) {
            this.setState({
                addressInfo: {
                    ...this.state.addressInfo,
                    address: {
                        ...this.state.addressInfo.address,
                        [name.split(".")[1]]: value
                    }
                }
            })
        } else {
            this.setState({
                addressInfo: {
                    ...this.state.addressInfo,
                    [name]: value,
                }
            })
        }

    }


    handleChange(field) {
        return evt => this.setState({ [field]: evt.target.value });
    }

    render() {

        switch (this.state.step) {
            case 1:
                return (
                 
                        <Cart cartItems={this.state.order.productListDTO} onChangeQuantity={this.onChangeQuantity} removeCartItem={this.removeCartItem} onSubmit={this.goToNext} previous={this.goToPrevious} />
                    
                );
            case 2:
                return (
                    <CustomerInfo customer={this.state.addressInfo} changeHandler={this.changeHandler} onSubmit={this.goToNext} previous={this.goToPrevious} payment={this.state.order.payment}  onPaymentChange={this.paymentHandler}/>
                  
                );
            case 3:
                return (
                    <Payment previous={this.goToPrevious} />
               
                );
        }
    }
}

export default CheckoutForm;
