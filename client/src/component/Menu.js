import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction";
import { getRestaurants } from "../actions/restaurantAction";
import Fooditem from "./Fooditem";

const Menu = ({ storeId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { menus, loading, error } = useSelector((state) => state.menus);
  useEffect(() => {
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id, storeId]);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading menus...</p>
        ) : error ? (
          <p> Error: {error}</p>
        ) : menus && menus.length > 0 ? (
          menus.map((menu) => (
            <div key={menu.id}>
              <h2>{menu.category}</h2>
              <hr />
              {menu.items && menu.items.length > 0 ? (
                <div className="row">
                  {menu.items.map((fooditem) => (
                    <Fooditem key={fooditem._id} fooditem={fooditem} />
                  ))}
                </div>
              ) : (
                <p>No Fooditem available</p>
              )}
            </div>
          ))
        ) : (
          <p> No menue Available</p>
        )}
      </div>
    </>
  );
};

export default Menu;
