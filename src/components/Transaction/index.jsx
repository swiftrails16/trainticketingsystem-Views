import './index.css'
import Header from '../Header'
const Transaction = () => {
  return (
 <>
 <Header/><div class="payment-container">
              <div class="payment-buttons">
                  <button class="apple-pay"> Pay</button>
                  <button class="google-pay">G Pay</button>
              </div>
              <div class="alternative-payment">

                  <p>Or pay another way</p>
              </div>
              <form id="payment-form">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />

                  <label for="payment-method">Payment method</label>
                  <select id="payment-method" name="payment_method">
                      <option value="card" selected>Card</option>
                      <option value="klarna">Klarna</option>
                  </select>

                  <fieldset class="card-information">
                      <legend>Card information</legend>
                      <input type="text" id="card-number" name="card_number" placeholder="1234 1234 1234 1234" pattern="\d{4} \d{4} \d{4} \d{4}" required />
                      <input type="text" id="card-expiry" name="card_expiry" placeholder="MM / YY" pattern="\d{2} \/ \d{2}" required />
                      <input type="text" id="card-cvc" name="card_cvc" placeholder="CVC" pattern="\d{3}" required />
                  </fieldset>

                  <label for="name-on-card">Name on card</label>
                  <input type="text" id="name-on-card" name="name_on_card" placeholder="Enter the name on card" required />

                  <label for="country-region">Country or region</label>
                  <select id="country-region" name="country_region">
                      <option value="us">United States</option>

                  </select>

                  <label for="zip">ZIP</label>
                  <input type="text" id="zip" name="zip" placeholder="Enter your ZIP" required />

                  <button type="submit" className='submitButton'>Pay</button>
              </form>
          </div></>


  )
}
export default Transaction
