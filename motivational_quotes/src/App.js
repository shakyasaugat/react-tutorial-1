import React, {useState} from 'react';
import ItemQuotes from './ItemQuotes';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const App = () => {
    const [items, setItems] = useState([]);

    const fetchData = () => {
        return fetch('http://jsonguide.technologychannel.org/quotes.json')
            .then((response) => response.json())
            .then((data) => { setItems(data) })
    }
    return (
        <div>
            <button onClick={() => fetchData()}>fetch</button>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    {items.map((item, index) => <ItemQuotes key={index} author={item.from} text={item.text} />)}
                </Stack>
            </Box>
        </div>
    )
}

export default App;