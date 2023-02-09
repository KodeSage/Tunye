/** @format */
import {
	Button,
	Container,
	Heading,
	HStack,
	Text,
	VStack,
	Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ConnectedPage = () => {
	return (
		<VStack spacing={20}>
			<Container>
				<VStack spacing={8}>
					<Heading
						color="white"
						as="h1"
						size="xl"
						noOfLines={2}
						textAlign="center">
						Tunye: One Stop Platform to purchase , stake and mint Nfts.
					</Heading>

					<Text color="bodyText" fontSize="xl" textAlign="center">
						Each of the Tunye Nft is randomly generated and can be staked to
						receive our native token
						<Text as="b">$TNT</Text>. Minting a Tunye Nft will give you a chance
						to become part of our DAO.
					</Text>
				</VStack>
			</Container>

			<Button bgColor="accent" color="white" maxW="380px">
				<HStack>
					<Text>Mint Tunye</Text>
					<ArrowForwardIcon />
				</HStack>
			</Button>
		</VStack>
	);
};

export default ConnectedPage;
