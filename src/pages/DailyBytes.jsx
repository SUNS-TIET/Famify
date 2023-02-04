import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
  Container,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import BlogCard from "../components/BlogCard";

import axios, {Axios} from "axios";
import { useState } from "react";

import API_KEY from "../config";

export default function Blog() {
  
  const url = "https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey="+API_KEY;

  const [data, setData] = useState([]);

  const getNews = ()=>{
    axios.get(url).then((response)=>{
      setData(response.data.articles)
    });
  }

  return (
    <div>
      <SimpleGrid columns={{sm: 2, md: 3, lg: 3, xl: 4,'2xl':4}} spacing={10} minChildWidth={300}>
        {data && data.map(value => (
          <BlogCard 
          author={value.author} 
          desp = {value.description}
          title = {value.title} 
          link = {value.url}
          imgURL={value.urlToImage}
          date={value.publishedAt}
          />
        ))}
        <Button bg="#df6005" color="white" onClick={getNews}>Load</Button>
      </SimpleGrid>
    </div>
    
  )
};