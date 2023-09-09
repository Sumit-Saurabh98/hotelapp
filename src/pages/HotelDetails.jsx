// MovieDetailsPage.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Flex, Spinner} from "@chakra-ui/react"
import axios from "axios";
import HotelDetailsCard from "../components/hotelCard/HotelDetailsCard";

function HotelDetailsPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [isLoading, setIsLoading] = useState(true);

   const BASE_URL = "https://hotelapi-c1yb.onrender.com"

  const getHotels = async () => {
  const {data} = await axios.get(`${BASE_URL}/rooms/${id}`)
   setHotel(data)
   setIsLoading(false)
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Flex
          align="center"
          justify="center"
          minH="100vh" 
        >
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
          />
        </Flex>
      ) : (
        <HotelDetailsCard  hotel={hotel} />
      )}
    </div>
  );
}

export default HotelDetailsPage;
