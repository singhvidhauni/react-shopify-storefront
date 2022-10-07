# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Custom React Shopify storefront using React, Shopify API & Chakra UI for Respnsive styling the frontend UI `



### shopify.com
![image](https://user-images.githubusercontent.com/4363033/194568328-958d303a-fb48-4189-9e03-ac21b991d527.png)



This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Steps to setup Shopify
1.  Visit the Shopify Partners Program https://www.shopify.com/in/partners and Join it.

![image](https://user-images.githubusercontent.com/4363033/194598798-670479c8-7bd4-41f5-9d9a-2cd5406447e6.png)

2.  login to the partners account 

![image](https://user-images.githubusercontent.com/4363033/194599498-8c1da36b-55d6-4566-90a0-665764518b15.png)

3.  Here is your Shopify Partners Dashboard with Business Name at RightTop.

![image](https://user-images.githubusercontent.com/4363033/194601721-2a00bf55-d3f6-423b-826b-5e8c1e1c908f.png)

4.  Now you can open a store by clicking the add store button on the right hand side. Select a Development store option and continue filling all informations.

5.  Once the store is created login to the store by clicking the login link at the right side of store name.

![image](https://user-images.githubusercontent.com/4363033/194603123-7ec1cbca-c75c-45c5-8534-0ada4cdbcc18.png)

6.  Within the store login, click the apps on left navigation to create private apps by filling required details. Please note down the **Storefront Access Token.**

![image](https://user-images.githubusercontent.com/4363033/194604425-6c8efdcc-5cfe-443f-9706-c0b1a75767b2.png)

This section has the third Tab titled API Credentials, which has a Storefront Access Token given below on scroll at little bit. 

![image](https://user-images.githubusercontent.com/4363033/194605285-cdf0a420-a617-4059-b971-a1b968b45b7c.png)

7. Note down the Storefront Access Token & the domain name of your store ending with myshopify.com for e.g. as given below.

![image](https://user-images.githubusercontent.com/4363033/194606119-0b82a570-b572-4df0-b49c-0b8265e0968c.png)


### Configuring the Development environemnt.
1.  setup a react app on your machine (npx create-react-app shopify-react-store )
2.  Now open the project folder in VS Code and visit the few packages as specified.
3.  Visit this Page https://shopify.dev/custom-storefronts/tools/js-buy and click the View the JS BUY SDK Link.

![image](https://user-images.githubusercontent.com/4363033/194612499-0eae1763-b3da-4383-ad83-66c610418b4a.png)

4.  Now install the following package $ yarn add shopify-buy / $ npm install shopify-buy.
5.  Visit the following page to install the Chakra-UI related packages.
    https://chakra-ui.com/getting-started
    
    ![image](https://user-images.githubusercontent.com/4363033/194613497-e22b730f-18e0-43b1-a8b1-1ac624263d0f.png)

6.  npm or yarn by typing **yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion**
7.  install the react-icons, **yarn add react-icons**
8.  now add the react-router-dom for routing **yarn add react-router-dom**
9.  Please refer to the following link (https://shopify.github.io/js-buy-sdk/) for **the Storefront API **


### Application screenshots
1. Home Page with Hero component.

![image](https://user-images.githubusercontent.com/4363033/194614938-3059a019-1980-45da-8bb3-2e1bb1511f95.png)

2.  ImageWithText Component, the image & Text can be reversed 

![image](https://user-images.githubusercontent.com/4363033/194615306-0cddabe4-1e6f-46c3-b015-c4e2a9fcb8bd.png)

3.  Product Gallery

![image](https://user-images.githubusercontent.com/4363033/194615430-6a13934d-afe2-43a7-ae4a-ba5d822c75d5.png)

4.  The Footer Component 

![image](https://user-images.githubusercontent.com/4363033/194615621-a9361dd5-f46a-48d4-a339-21050653c313.png)

5.  The ProductPage

![image](https://user-images.githubusercontent.com/4363033/194615747-66c02fd1-7186-41a2-9be8-500886c544ab.png)





This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
