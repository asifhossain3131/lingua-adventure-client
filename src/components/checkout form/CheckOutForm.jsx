import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTokenSecure from '../../hooks/useTokenSecure';
import { Button } from '@material-tailwind/react';

const CheckOutForm = ({course}) => {
    const stripe = useStripe();
    const elements = useElements()
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const[clientSecret,setClientSecret]=useState('')
    const{user}=useContext(AuthContext)
    const[tokenSecure]=useTokenSecure()
   const price=course?.price
   const[processing,setProcessing]=useState(false)

    useEffect(()=>{
        console.log(course);
    if(price>0){
        console.log(price)
        tokenSecure.post(`/create-payment-intent`,{price})
        .then(res=>{
          console.log('inside useeffet',res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
    }
 
    },[price,tokenSecure])

    const handlePayment = async (e) => {
        e.preventDefault();
          setError('')
          setSuccess('')
        if (!stripe || !elements) {
          return;
        }
    
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return setError('Please provide your card information')
        }
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
         setError(error.message)
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        // confirm payments 
        const {paymentIntent, error:paymentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName||'Unknown',
                  email:user?.email||'Not found',
                },
              },
            },
          );
          if(paymentError){
            console.log(paymentError)
          }
        //   confirmed payments 
          setProcessing(false)
          if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                courseName:course?.classname
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                }
            })
        }
      };
    return (
        <div>
             <form onSubmit={handlePayment}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Button color="blue" type="submit" disabled={!stripe || !clientSecret || processing}>Pay ${price}</Button>
    </form>
    {error && <p className='text-red-600'>{error}</p>}
    {success && <p className='text-green-600'>{success}</p>}
        </div>
    );
};

export default CheckOutForm;