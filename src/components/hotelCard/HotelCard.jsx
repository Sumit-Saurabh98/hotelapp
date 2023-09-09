import React from "react";
import {useNavigate} from "react-router-dom"
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

function HotelCard({
  hotel,
  showButtons,
  handleBooknow
}) {
    const navigate = useNavigate();

  return (
    <Card maxW="sm" key={hotel.id}>
      <CardBody>
        <Image
        onClick={()=>navigate(`/${hotel.id}`)}
        _hover={{cursor:"pointer"}}
          src={hotel.image}
          alt={hotel.title}
          borderRadius="lg"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{hotel.name}</Heading>
          <Text>{hotel.price}</Text>
        </Stack>
        <Divider m="10px 0" />
        {
            showButtons ? (<Box display={"flex"} justifyContent="space-around">
          <Button
            colorScheme="cyan"
            onClick={() => handleBooknow(hotel.id)}
          >
            Book Now
          </Button>
        </Box>):""
        }
        
      </CardBody>
    </Card>
  );
}

export default HotelCard;
