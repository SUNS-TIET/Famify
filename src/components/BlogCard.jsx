import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

export const BlogAuthor = (props) => {
	return (
		<HStack marginTop="2" spacing="2" display="flex" alignItems="center">
			<Text fontWeight="medium">{props.name}</Text>
			<Text>—</Text>
			<Text>{props.date.toLocaleDateString()}</Text>
		</HStack>
	);
};

const BlogCard = (props)=>{
	return(
		<Box w="100%">
			<Box borderRadius="lg" overflow="hidden">
				<Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
					<Image
						transform="scale(1.0)"
						src={
							props.imgURL
						}
						alt="some text"
						objectFit="contain"
						width="100%"
						transition="0.3s ease-in-out"
						_hover={{
							transform: 'scale(1.05)',
						}}
					/>
				</Link>
			</Box>
			<Heading fontSize="xl" marginTop="2">
				<Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={props.link}>
					{props.title}
				</Link>
			</Heading>
			<Text as="p" fontSize="md" marginTop="2">
				{props.desp}
			</Text>
			<BlogAuthor
				name={props.author}
				date={new Date(props.date)}
			/>
		</Box>
	);
};

export default BlogCard;