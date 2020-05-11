import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CustomerForm from '../customers/CustomerForm';
import LoginForm from '../customers/LoginForm';

class HomePage extends Component {


    render() {
        let modalBody;
        if (this.props.register) {
            modalBody = <CustomerForm register={this.props.register} />
        } else {
            modalBody = <LoginForm></LoginForm>
        }
        return (
            <>

                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">Simple Ecommerce</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item m-auto">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="category.html">Categories</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="product.html">Product</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="contact.html">Cart <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>

                            <form class="form-inline my-2 my-lg-0">
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-secondary btn-number">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <a class="btn btn-success btn-sm ml-3" href="cart.html">
                                    <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-light">3</span>
                                </a>

                            </form>
                        </div>
                    </div>

                </nav>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">E-COMMERCE CART</h1>
                    </div>
                </section>


                <div class="container mb-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Available</th>
                                            <th scope="col" class="text-center">Quantity</th>
                                            <th scope="col" class="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Dada</td>
                                            <td>In stock</td>
                                            <td><input class="form-control" type="text" value="1" /></td>
                                            <td class="text-right">124,90 €</td>
                                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Toto</td>
                                            <td>In stock</td>
                                            <td><input class="form-control" type="text" value="1" /></td>
                                            <td class="text-right">33,90 €</td>
                                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Titi</td>
                                            <td>In stock</td>
                                            <td><input class="form-control" type="text" value="1" /></td>
                                            <td class="text-right">70,00 €</td>
                                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Sub-Total</td>
                                            <td class="text-right">255,90 €</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Shipping</td>
                                            <td class="text-right">6,90 €</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><strong>Total</strong></td>
                                            <td class="text-right"><strong>346,90 €</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="row">
                                <div class="col-sm-12  col-md-6">
                                    <button class="btn btn-block btn-light">Continue Shopping</button>
                                </div>
                                <div class="col-sm-12 col-md-6 text-right">
                                    <button class="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;