import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AuthShowcase } from "./auth-showcase";
import { Suspense } from "react";


const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello, Next.js!
      </h1>
      <p className="text-2xl">
        Example Some User Data
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthShowcase />
      </Suspense>
    </div>
  );
};

export default Home;

