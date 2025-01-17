import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import UseCart from '../../../hooks/UseCart';

const CheckOutFrom = () => {
    const[error,setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const [cart] = UseCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)

    useEffect(()=>{
        axiosSecure.post('/create-checkout-session',{price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // confirm payment
        const {paymentIntent, error: confirmError} =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')

        }
        else{
            console.log('payment itend',paymentIntent);
            if (paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxWidth: '400px',
                margin: '0 auto',
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                backgroundColor: '#f7fafc',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748', textAlign: 'center' }}>
                Payment Details
            </h2>
            <div
                style={{
                    padding: '12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                }}
            >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#2d3748',
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                '::placeholder': {
                                    color: '#a0aec0',
                                },
                            },
                            invalid: {
                                color: '#e53e3e',
                            },
                        },
                    }}
                />
            </div>
            <button
                type="submit"
                disabled={!stripe || !clientSecret }
                className="btn-outline p-2 px-4 mt-3 border-4 btn border-x-0"
                style={{
                    backgroundColor: '#3182ce',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '12px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#2c5282')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
            >
                Pay
            </button>
            <p className='pt-3 text-red-600'>{error}</p>
            {
                transactionId && <p >Your Transaction Id:<span className='text-green-500'>{transactionId}</span></p>
            }
        </form>
        
    );
};

export default CheckOutFrom;
