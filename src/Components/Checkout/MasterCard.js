import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const MasterCard = () => {
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expDate, setExpDate] = useState('')
    const [secCode, setSecCode] = useState('')
    const [zipCode, setZipCode] = useState('')

    const { t } = useTranslation()
  return (
    <div>
        <div className="sendMessage">
          <form className='chNameNoFlex'>
              <div className="spanFull">
                <input className='formItem' id='firstName' type="text" placeholder={ t("checkout.master.card_name") } onChange={e=>{setCardName(e.target.value)}} value={cardName} />
                <input className='formItem' id='lastName' type="text" placeholder={ t("checkout.master.card_number") } onChange={e=>{setCardNumber(e.target.value)}} value={cardNumber} />
              </div>
              <div className="spanHalf">
                <input className='formItem' id='firstName' type="text" placeholder={ t("checkout.firstName") } onChange={e=>{setCardName(e.target.value)}} value={cardName} />
                <input className='formItem' id='lastName' type="text" placeholder={ t("checkout.lastName") } onChange={e=>{setCardNumber(e.target.value)}} value={cardNumber} />
                <input className='formItem' id='lastName' type="text" placeholder={ t("checkout.lastName") } onChange={e=>{setCardNumber(e.target.value)}} value={cardNumber} />
              </div>
              <div className="spanFull">
                <button type='submit' className="callToAction honeyItemLink redBackground cardPay">{ t("checkout.master.button") }</button>   
              </div>
          </form>
        </div>
    </div>
  )
}

export default MasterCard