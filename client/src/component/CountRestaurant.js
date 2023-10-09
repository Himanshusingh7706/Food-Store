import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../actions/restaurantAction";
import "./css/count.css";
const CountRestaurant = () => {
  const dispatch = useDispatch();

  const { count, pureVegRestaurantCount, showVegOnly, loading, error } =
    useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch, showVegOnly]);

  return (
    <div>
      {loading ? (
        <p> Loading restaurant count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantCount : count}{" "}
          <span className="Restro">
            {showVegOnly
              ? pureVegRestaurantCount === 1
                ? "Restaurant"
                : "Restaurants"
              : count === 1
              ? "Restaurant"
              : "Restaurants"}
          </span>
        </p>
      )}
    </div>
  );
};

export default CountRestaurant;
