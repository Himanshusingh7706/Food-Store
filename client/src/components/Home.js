import React,{useEffect} from 'react';
import{
  getRestaurants,
  sortByRatings,
  sortByReviews,
  toggleVegOnly,
} from "../actions/restaurantAction";
import Restaurant from "../components/Restaurant.js";
import Loader from "../components/layout/Loader.js";
import Message from "../components/Message.js";
import {useDispatch, useSelector} from "react-redux";
import CountRestaurant from './CountRestaurant';

const Home = () => {
  const dispatch = useDispatch();

  const{
    loading: restaurantsLoading,
    error: restaurantsError, 
    restaurants,
    showVegOnly,
  } = useSelector ((state)=> state.restaurants);

  useEffect(()=>{
    if (restaurantsError){
      return alert.error(restaurantsError);
    }
    dispatch (getRestaurants());
  }, [dispatch, restaurantsError]);

  const handleSortByRatings = () => {
    dispatch(sortByRatings());
  };

  const handleSortByReviews = () => {
    dispatch(sortByReviews());
  };

  const handleToggleVegOnly = () => {
    dispatch(toggleVegOnly());
  };
  
  return (
    <>
    <CountRestaurant/>
    {restaurantsLoading? (
        <Loader/>
      ): restaurantsError? (
        <Message variant="danger"> {restaurantsError} </Message>
      ): (
          <>
          <section>
            <div className='sort'>
              <button className='sort_veg p-3' onClick={handleToggleVegOnly}>
                {showVegOnly ? "Show All" : "Pure Veg Only"}
              </button>
              <button className='sort_rev p-3' onClick={handleSortByReviews}>
                Sort by Reviews
              </button>
              <button className='sort_rate p-3' onClick={handleSortByRatings}>
                Sort by Ratings
              </button>
            </div>
            <div className='row mt-4'>
              {restaurants && restaurants.restaurants ? (
                restaurants.restaurants.map((restaurant) => 
                  !showVegOnly || (showVegOnly && restaurant.isVeg)? (
                    <Restaurant key={restaurant._id} restaurant = {restaurant}/>
                  ): null
                )
              ): (
                <Message variant="info">No restaurants Found.</Message>                
              )} 
            </div>
          </section>          
          </>
        )
    }
    </>
  );
}

export default Home;
