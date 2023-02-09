/** @format */

import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import ParticlesBackground from "../config/ParticlesBackground";
import LandingPage from "../components/LandingPage";
import { useWallet } from "@solana/wallet-adapter-react";
import ConnectedPage from "../components/ConnectedPage";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const { connected } = useWallet();
	return (
		<div className={styles.container}>
			<Head>
				<title>Tunye</title>
				<meta name="The NFT Collection Platform for Creators built on Solana " />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ParticlesBackground />
			<Box w="full" h="calc(100vh)" backgroundPosition="center">
				<Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />
					<Spacer />
					<Center>{connected ? <ConnectedPage /> : <LandingPage />}</Center>
					<Spacer />
					<Center>
						<Box marginBottom={4} color="white">
							<a
								href="https://github.com/KodeSage"
								target="_blank"
								rel="noopener noreferrer">
								developed by KodeSage
							</a>
						</Box>
					</Center>
				</Stack>
			</Box>
		</div>
	);
};

export default Home;
