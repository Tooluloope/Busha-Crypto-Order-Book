import React from 'react';
import './options.style.css'
const sortPair = (a, b) => a.name > b.name ? 1 : -1; 


const Options = React.memo(({currencyPairs, onSelect}) => {

    const handleChange = ({target}) => {
        onSelect(target.options[target.selectedIndex].value);
    }

    return(   
        <div className='select'>
            <select onChange={handleChange} className=''>
                <option selected disabled value={null}>Choose an Option</option>
                    {currencyPairs.sort(sortPair).map(
                        ({ id, name }) => <option key={id} value={id}>{name}</option>
                    )}
            </select>
        </div>
    )

});

export default Options;
