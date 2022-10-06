import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
  language: 'ja-JP',
});

export class ShopDataProvider extends Component {
  state = {
    productImage: '',
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };
  componentDidMount() {
    //fetching product details correctly
    // this.fetchProductWithHandle('blue-berry');
    //createCheckout
    if (localStorage.getItem('checkout_id')) {
      this.fetchCheckout(localStorage.getItem('checkout_id'));
    } else {
      this.createCheckout();
    }
    this.setState({
      productImage:
        'https://cdn.shopify.com/s/files/1/0622/5733/2386/products/boat-shoes_720x720_5f844fef-bfba-492a-8f30-73bc4749327f.jpg?v=1665069761',
    });
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    this.setState({ checkout: checkout });
  };
  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);

    this.setState({ checkout: checkout });
  };
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = {
      variantId,
      quantity: parseInt(quantity, 10),
    };
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    this.openCart();
  };

  removeLineItem = async (lineItemIDsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIDsToRemove
    );
    this.setState({ checkout: checkout });
  };
  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };
  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopDataProvider;
