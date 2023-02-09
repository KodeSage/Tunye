/** @format */

import { MouseEventHandler, useCallback } from "react";
import {
	Button,
	Container,
	Heading,
	HStack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const LandingPage = () => {
	const modalState = useWalletModal();
	const { wallet, connect } = useWallet();
	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		(event) => {
			if (event.defaultPrevented) {
				return;
			}

			if (!wallet) {
				modalState.setVisible(true);
			} else {
				connect().catch(() => {});
			}
		},
		[wallet, connect, modalState]
	);

	return (
		<Container>
			<VStack spacing={20}>
				<Heading
					color="white"
					as="h1"
					size="xl"
					noOfLines={2}
					textAlign="center">
					Tunye: One stop Platform for NFTs on the Solana Blockchain
				</Heading>
				<Button
					bgColor="accent"
					color="white"
					maxW="380px"
					onClick={handleClick}>
					<HStack>
						<Text>Mint TunyeNft</Text>
						<ArrowForwardIcon />
					</HStack>
				</Button>
			</VStack>
		</Container>
	);
};

export default LandingPage;
