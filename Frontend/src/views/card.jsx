import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <VStack>
            
            <Text>₹{amount}</Text>
            <button className="buy-now-btn button" onClick={() => checkoutHandler(amount)}>Buy Now</button>
        </VStack>
    )
}

export default Card