import React from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";

const HomeContainer = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="page">
        <nav className="navbar">
          <a href="" className="brand">
            <Image
              width={30}
              height={30}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F84%2FApple_Computer_Logo_rainbow.svg%2F1200px-Apple_Computer_Logo_rainbow.svg.png&f=1&nofb=1"
              alt=""
            />
          </a>
          <ul>
            <li onClick={() => router.push("/chart")}>Login</li>
          </ul>
        </nav>
        <div className="left">
          <h1>Manage Your Inventry</h1>
          <p>Apple&apos;s remarkable new personal computer</p>
          <button>Login</button>
        </div>
        <div className="right">
          {/* <div class="img">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsebastien-compagne.fr%2Fwebsite%2Fzpg%2Farcheologeek%2F1990_-_apple_mac_classic_II.png&f=1&nofb=1" />
          </div> */}
          <ul>
            <li>Instagram</li>
            <li>-</li>
            <li>Facebook</li>
            <li>-</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
