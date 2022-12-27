import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { Suspense } from "react";


const Home: NextPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthShowcase />
      </Suspense>
    </div>
  );
};

export default Home;

