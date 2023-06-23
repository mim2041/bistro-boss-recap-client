/**
 * 1. Install stripe and react stripe js
 * 2. Create a checkout form with card element (card element contains: card number, expiration date, cvs, zip code)
 * 3. Create account on Stripe and get publishable key
 * 4. Get card information
 * 5. Create a payment method
 * 6. use test card to test payment
 * 7. on the server side: install stripe: npm i --save stripe
 * 8. create a payment intent api with payment method types: ['card'] make sure you provide amount in cents (multiply price with 100)
 * 9. call payment intent api to get client secret and store it in a state
 * 10. use confirmCardPayment api with client secret cart info
 * 11. display confirm card error
 * 12. display confirm card success
 * 13. do things after payment
 */