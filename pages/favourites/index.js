import { Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, {Toaster} from "react-hot-toast"; 

function Favourites() {
  const favorites = useSelector((state) => state.favoriteReducer);

  const dispatch = useDispatch();

  const empty = () => {
    dispatch({ type: "EMPTY_FAVORITE", payload: "" });
    notify();
  };

  const notify = () => {
		toast.success('Favorites cleaned successfully',{
			duration: 1500,
			position: "bottom-right",
			theme: {
				primary: 'green',
				secondary: 'black',
			}
		});
	};
  return (
    <>
      <div className="container" style={{marginTop:'40px'}}>
      <Row style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
          <Col>
          <button onClick={()=>empty()}>Empty</button>
          </Col>
          <Col>  
          <h2><b>Count:</b> {favorites.length}</h2>
          <ul style={{margin:'0',padding:'0'}}>
          {favorites &&
            favorites.map((item, key) => <li style={{listStyle:'none',margin:'0',marginBottom:'10px'}} key={key}>{key+1}.   {item.id}, {item.companyName}</li>)}
          </ul>
        </Col>
      </Row>
      <Toaster/>
      </div>
    </>
  );
}

export default Favourites;
