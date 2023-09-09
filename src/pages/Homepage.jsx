import React, { useEffect, useState } from "react";
import "./homepage.css";
import {
  Box,
  Button,
  Input,
  useToast,
  Spinner, Flex
} from "@chakra-ui/react";
import axios from "axios";
import HotelCard from "../components/hotelCard/HotelCard";

function Homepage(props) {
  const toast = useToast();
  const [hotel, setHotel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  // const BASE_URL = process.env.REACT_APP_BASE_URL
  const BASE_URL = "https://hotelapi-c1yb.onrender.com"

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const getHotels = async () => {
    
    const {data} = await axios.get(`${BASE_URL}/rooms`)
   setHotel(data)
   setIsLoading(false)
  }

  useEffect(() => {
    getHotels();
  }, []);


  const handleBooknow = async (hotelId) => {
      toast({
        title: "Your booking has been confirmed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
  };


  const handleSearchSubmit = async () => {
    if (searchQuery) {
      try {
        const {data} = await axios.get(`?q=${searchQuery}`);
        setSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Input
            type="text"
            placeholder="Search hotels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button colorScheme="cyan" onClick={handleSearchSubmit}>
            Search
          </Button>
        </Box>
      </div>

      <div className="mainContainer">
        {!isLoading
          ? (searchQuery && searchResults.length > 0
              ? searchResults
              : hotel
            ).map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                showButtons={true}
                handleBooknow={handleBooknow}
              />
            ))
          : (<Flex
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
        </Flex>)}
      </div>
    </div>
  );
}

export default Homepage;
