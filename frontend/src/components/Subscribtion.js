import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import {
  Accordion,
  AccordionCollapse,
  AccordionToggle,
  Card,
  Form,
  FormLabel,
} from 'react-bootstrap'
import { paySubscribtion } from '../actions/subscribtionActions'
import Loader from './Loader'
import Message from './Message'

const Subscribtion = () => {
  const [subscribtionMonths, setSubscribtionMonths] = useState(1)
  const [totalPrice, setTotalPrice] = useState(199)
  const [sdkReady, setSdkReady] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const doctorDetails = useSelector((state) => state.doctorDetails)
  const { doctor } = doctorDetails

  const dispatch = useDispatch()

  useEffect(() => {
    setTotalPrice(subscribtionMonths * 1)

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!window.paypal) {
      console.log('done')
      addPayPalScript()
    } else {
      console.log('Not done')
      setSdkReady(true)
    }
  }, [dispatch, userInfo, subscribtionMonths])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(
      paySubscribtion({
        subscribtionMonths,
        totalPrice,
        paymentResult,
      })
    )
  }

  return (
    <Accordion>
      <AccordionToggle eventKey='subscribtion' as={Card.Header} variant='link'>
        <h3>Your Subscribtions</h3>
      </AccordionToggle>

      <AccordionCollapse eventKey='subscribtion'>
        <div>
          {doctor.isActive ? (
            <Message variant='success'>Your account is activated</Message>
          ) : (
            <Message variant='danger'>
              Your activation is suspended and will be regain after subscribtion
              paid
            </Message>
          )}
          <Form>
            <Form.Group controlId='subscribtionMonths'>
              <FormLabel>Subscribtion Months</FormLabel>
              <select
                className='custom-select'
                type='name'
                value={subscribtionMonths}
                onChange={(e) => setSubscribtionMonths(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>6</option>
                <option>12</option>
              </select>
            </Form.Group>
            <Form.Group controlId='totalPrice'>
              <Form.Label>Total Price</Form.Label>
              <Form.Control type='totalPrice' value={totalPrice}></Form.Control>
            </Form.Group>
          </Form>

          {!sdkReady ? (
            <Loader />
          ) : (
            <PayPalButton
              // amount={totalPrice.toFixed(2)}
              // onSuccess={successPaymentHandler}
              // catchError={(error) => console.log(error)}
              createOrder={function (data, actions) {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: '88.44',
                      },
                    },
                  ],
                })
              }}
              // Finalize the transaction
              onApprove={function (data, actions) {
                return actions.order.capture().then(function (details) {
                  // Show a success message to the buyer
                  alert(
                    'Transaction completed by ' +
                      details.payer.name.given_name +
                      '!'
                  )
                })
              }}
            />
          )}
        </div>
      </AccordionCollapse>
    </Accordion>
  )
}

export default Subscribtion
