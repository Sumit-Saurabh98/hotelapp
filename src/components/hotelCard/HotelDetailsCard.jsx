import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Badge,
  CircularProgress,
  CircularProgressLabel,
  Button,
  useToast
} from "@chakra-ui/react";

function HotelDetailsCard({ hotel}) {
const toast = useToast()
  const { image, name, capacity, description, size, price, bed } =
    hotel;


  return (
    <Box
      display="flex"
    flexDirection={"column"}
      justifyContent="start"
      alignItems="center"
      boxShadow="md"
      borderRadius="md"
      p={4}
      m={4}
    >
      <Image
        src={image}
        alt={name}
        borderRadius={{ base: "md", md: "none" }}
        maxH={{ base: "auto", md: "300px" }}
        mx={4}
      />
      <Button onClick={()=>{
        toast({
        title: "Your booking has been confirmed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      }} mt={"20px"}>Book Now</Button>
      <VStack align="start" mx={4} mt={{ base: 4, md: 0 }}>
        <Heading size="lg">{name}</Heading>
        <Text fontSize="lg" fontWeight="bold" color="gray.600">
          Capacity: {capacity}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.600">
          Price: {price}
        </Text>
        <Badge colorScheme="teal" variant="outline" fontSize="md" mt={2}>
          Bed: {bed}
        </Badge>
        <Text fontSize="md" mt={4}>
          {description}
        </Text>
        <CircularProgress
          value={parseFloat(size)}
          color="teal"
          size="120px"
          thickness="8px"
        >
          <CircularProgressLabel>
            {parseFloat(size)/10}
          </CircularProgressLabel>
        </CircularProgress>
      </VStack>
    </Box>
  );
}

export default HotelDetailsCard;
