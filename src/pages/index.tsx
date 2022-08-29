import type { NextPage } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div>
      <p>note</p>
    </div>
  );
};
const SearchBar: FunctionComponent = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

const SideMenu: FunctionComponent = () => {
  return <div className="text-6xl">|||</div>;
};

const UserProfileButton: FunctionComponent = () => {
  return (
    <div>
      <button className="text-2xl text-green-400">user</button>
    </div>
  );
};

const MainCarousel: FunctionComponent = () => {
  return (
    <div className="flex-grow-0">
      <div>data</div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex-auto bg-black border-red-400">
      <Head>
        <title>Notade</title>
        <meta name="description" content="App to write notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-auto bg-black">
        <div className="float-right bg-black">
          <Header />
          <SideMenu />
          <SearchBar />
          <UserProfileButton />
          <MainCarousel />
        </div>
      </main>
    </div>
  );
};

export default Home;
