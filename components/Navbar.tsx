/** @format */

import styles from "../styles/Home.module.css";
import { HStack, Spacer,Text, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const WalletButton = dynamic(
	async () =>
		(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
	{ ssr: false }
);

const NavBar = () => {
	return (
		<HStack width="full" padding={2}>
			<Heading color="white" as="h1" size="xl" noOfLines={2}>
				Tunye
			</Heading>
			<Spacer />
			<WalletButton className={styles["walletbutton"]} />
		</HStack>
	);
};

export default NavBar;
