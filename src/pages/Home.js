import React from 'react';
import { Product } from '../components';
import '../css/home.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoods } from '../redux/actions/goods';


function Home() {
  const items  = useSelector(({ goods }) =>  goods.items);
  
  const dispatch = useDispatch();
  
 
  React.useEffect(() => {
     dispatch(fetchGoods());
  }, []) 

  const handleAddGood = (obj) => {
     dispatch({
      type: 'ADD_GOOD_CART',
      payload: obj,
     });
     
  };
 
    return (
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
            <div className="container">
            <div className="row">
                   {
                       items && items.map((obj => 
                        <div className="col-md-3 col-sm-6">
                      <Product 
                      onClickGood={handleAddGood}
                      key={obj.id} 
                      {...obj} />
                        </div>
                      ))}
             </div>   
          </div>
       </div>
    )
}

export default Home;
