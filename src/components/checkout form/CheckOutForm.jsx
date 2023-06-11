import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTokenSecure from '../../hooks/useTokenSecure';
import { Button } from '@material-tailwind/react';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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
   const[transId,setTransId]=useState('')
   const navigate=useNavigate()

    useEffect(()=>{
    if(price>0){
        tokenSecure.post(`/create-payment-intent`,{price})
        .then(res=>{
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
            setTransId(paymentIntent.id);
            const paymentInfo = {
                email: user?.email,
                transId: paymentIntent.id,
                price,
                date: moment().format('LLL'),
                courseName:course?.classname,
                instructor:course?.instructorName
            }
            tokenSecure.post('/payments', paymentInfo)
            .then(res => {
                toast.success(`${res.data.message} with ${transId}`)
                 navigate('/dashboard/myenrolledclasses')
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