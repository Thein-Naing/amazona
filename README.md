# amazona- react with firebase
# After struggling a few days and finally successfully deployed amazona(amazon-clone)in firebase.
# Here is the link https://a-5fe53.firebaseapp.com/
`[1]After learning a couple of amazon clone tutorials from youtube channels and afetr bought and learning ecommerce from scratch mern stack tutorial from traversymedia.com and so on I created this amazona website on my own.
Thanks to Easy2Code,CleverProgrammer,Coding with Basir, CodeSoucrce and coopercode youtube channels and traversymedia.com  and www.netninja.dev`



`[2] Update Home.css/Header.css for UI with new banner.`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/b2c090a0-b186-44ee-9c74-76a90dc077bb">

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/8f2730cb-30c4-4c24-86a9-eff7c8bb1f62">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/be1637b6-a1d1-4e52-8186-5ab44db25325">

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/4812c151-1eb1-48a8-974b-54ccab7e3415">

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/318d1168-09d9-4b06-b5e6-c55ddb90fa1d">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/cc7327ba-dfaf-4b53-8fac-079e28ffc86c">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/c1fe0fcd-588e-4732-90b6-a5b71c35ada4">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/7962975d-58a3-437d-8c22-8a51635b1fe4">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/d24642b0-0efd-40fd-a9c5-ebdd27a67e4d">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/a663b5e9-8d84-4f18-aaf5-6b32e8d6259d">
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/6e100ef9-0f54-4ab3-8491-fd71e0c5de98">


`[3] Create Checkout.jsx/css and export to App.js to render and add Link to '/checkout above basket icon to get redirect functionality to Checkout page when we click basket icon`



<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/9cb2497b-d70b-4d4f-b939-57e8a328e177">







`[4] Create Checkout page and css styling  . it works but busket icon is not working again and neeed to test it`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/9a09663f-1c16-4a54-b44c-8f4733f09a1d">

`[5] Fixed error and basket icon/ create context for global state management and now checkout page is working fine. Still working on checkout page.`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/18d160c7-a6eb-4a98-bd2b-16fbf6b0972f">

`[6] Updating checkout page , UI is not tidy need to fix`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/5c81310a-7306-420c-a1b2-5bf972bad907">


`[7] Update Header.jsby using StateProvider and update quantuty 0 with{basket.length} at ShoppingBasketIcon component. But UI is still not good`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/e35220b8-4f18-4ae4-b887-211ff715ee3f">

`[8] Update CheckoutProducts.css and now UI is better than before;
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/2cb3380f-1438-4039-aa22-7f2c990f1d63">

`[9] Update SubTotal.jsx/css and checkout UI is now looking good. Test it and all working fine. Will continue stripe payments functionality `

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/a3e8c891-4513-4dfe-a15d-ee4303666648">

`[10] npm i react-stripe-checkout axios react-toastify`
`[11] uninstall react-toastify and replace with alert because of causing webpack error and stripe payment UI is not so good now and currencyforamt has also error and need to fix `
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/7d3991f9-0b82-44db-9fe2-3f9dfeea6866">

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/1d39561b-56f7-4f18-b044-0e1a1fa844e8">

`[12] Create backend folder in root folder and npm i express cors uuid nodemon stripe dotenv for backend stripe payment is successful but axios got error and not receiving payments in srtipe`
<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/8dd9a63d-0064-4695-ad44-34a86d0865a4">

<img width="960" alt="image" src="https://github.com/Thein-Naing/amazona/assets/117463446/d2e4f235-8855-4cb6-8ea9-76949a05e3ea">

