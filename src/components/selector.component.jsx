import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { useAppState, useDispatch } from '../state';
import { Typography } from '@material-ui/core';
import { CURRENCY_PAIRED, CURRENCY_SELECTED } from '../actions';
import Options from './options.component';

const findWithId = idToFind => ({ id }) => idToFind === id


const Selector = ()=> {
    const { currencyPairs } = useAppState();
    const dispatch = useDispatch();
    const [error, setError] = useState('')



    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/', )
                const data = await response.json()
                dispatch({type: CURRENCY_PAIRED, data})
                console.log(data)
            } catch (error) {
                setError(`The following errors occurred:  ${error.message}`)
            }
            
        }
        fetchData();
        
    },[]);

    const handleSelect = useCallback((id) => {
        dispatch({
            type: CURRENCY_SELECTED,
            selectedPair: currencyPairs.find(findWithId(id)),

        })
    }, [currencyPairs, dispatch]);

    return (

        
        <Fragment>

     
        <Typography variant='body1' color='error'>{error}</Typography>
        <Options onSelect = {handleSelect} currencyPairs = {currencyPairs || []}>

        </Options>
      </Fragment>
    )

};

export default Selector;