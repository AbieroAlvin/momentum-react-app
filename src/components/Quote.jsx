import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {QuoteContainer, Text} from './QuoteStyles'


const Quote = () => {

  
    const [quoteData, setQuoteData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const category = 'success';
            const apiKey = '2AEg6stur2lBqWo1DQGsPA==RhjdGSjcri9h0aJ5'
            const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`

            try {
                const response = await axios.get(url, {
                  headers: { 'X-Api-Key': apiKey },
                  contentType: 'application/json'
                });
                setQuoteData(response.data);
              } catch (error) {
                console.error('Error fetching quotes:', error);
              }
            };

           
        
            fetchData();
        }, [])
    

        if (!quoteData) {
            return <p>Loading...</p>;
          }

   

  return (
    <QuoteContainer>
        <Text>{quoteData[0].quote}</Text>
        <Text>{quoteData[0].author}</Text> 
    </QuoteContainer>

  )
}

export default Quote