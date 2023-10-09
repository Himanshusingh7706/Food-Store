import React, { useEffect } from "react";
import {
  getRestaurants,
  sortByRating,
  sortByReview,
  toggleVegOnly,
} from "../actions/restaurantAction";
import Restaurant from "../component/Restaurant";
import Loader from "../component/Layout/Loader";
import Message from "../component/Message";
import { useDispatch, useSelector } from "react-redux";
import CountRestaurant from "./CountRestaurant";

const Home = () => {
  const dispatch = useDispatch();

  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (restaurantsError) {
      return alert.error(restaurantsError);
    }
    dispatch(getRestaurants());
  }, [dispatch, restaurantsError]);

  const handelSortByRatings = () => {
    dispatch(sortByRating());
  };

  const handelSortByReviews = () => {
    dispatch(sortByReview());
  };

  const handelToggleVegOnly = () => {
    dispatch(toggleVegOnly());
  };

  return (
    <>
      <CountRestaurant />
      {restaurantsLoading ? (
        <Loader />
      ) : restaurantsError ? (
        <Message variant="danger">{restaurantsError} </Message>
      ) : (
        <>
          <section>
            <div className="sort">
              <button className="sort_veg p-3" onClick={handelToggleVegOnly}>
                {showVegOnly ? "Show All" : "Pure Veg"}
              </button>
              <button className="sort_rev p-3" onClick={handelSortByReviews}>
                Sort By Reviews
              </button>
              <button className="sort_rate p-3" onClick={handelSortByRatings}>
                Sort By Rating
              </button>
            </div>
            <div className="row mt-4">
              {restaurants && restaurants.restaurants ? (
                restaurants.restaurants.map((restaurant) =>
                  !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                    <Restaurant key={restaurant._id} restaurant={restaurant} />
                  ) : null
                )
              ) : (
                <Message variant="info"> NO restaurant Found </Message>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
