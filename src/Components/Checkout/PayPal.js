import React from 'react'
import { useTranslation } from 'react-i18next'

const PayPal = ({ onValidate }) => {
    const { t } = useTranslation()
  return (
    <div className='paypal'>
         <button onClick={onValidate} type='submit' className="callToAction honeyItemLink">{ t("checkout.paypal") }</button>
    </div>
  )
}

export default PayPal