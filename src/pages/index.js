import Head from "next/head";
import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Items from "../components/Items";
import StayProductive from "../components/StayProductive";
import Testemonials from "../components/Testemonials";
import EarlyAcess from "../components/EarlyAcess";
import Footer from "../components/Footer";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fylo</title>
      </Head>
      <Topbar />
      <Hero />
      <Items />
      <StayProductive />
      <Testemonials />
      {/* 
      <EarlyAcess />
      <Footer /> */}
    </div>
  );
}
