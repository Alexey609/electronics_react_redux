import axios from 'axios';

export const fetchGoods = () => (dispatch) => {
    axios.get('http://localhost:3001/goods').then(({ data }) => { 
       dispatch(setGoods(data))
    });
};

export const setGoods = (items) => ({
    type: 'SET_GOODS',
    payload: items,
})