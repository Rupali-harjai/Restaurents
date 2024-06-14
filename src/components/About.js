import React from "react";
import About_img from "../images/about.png";

const About = () => {
  return (
    <div className="m-3 p-3 text-center">
      <h2 className="font-bold text-3xl text-center pb-5 mb-5 underline">
        About us
      </h2>
      <div className="flex flex-row  items-center">
        <img
          className="scale-125 h-72 sm:h-96 p-4 m-6"
          src={About_img}
          alt="About us"
        />

        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl mb-3 block">
            Meal planners help you program food for the whole week
          </h3>
          <p className="text-center text-md mb-3">
            It’s easy to be at a loss for inspiration when you come home worn
            out after hours at work and on the subway. Tesco simplifies your
            life with its list of pre-set menus for a whole week generated from
            your preferences. For families on a budget particularly, it can be
            really useful. No more need for several trips to the grocery store
            where you can hardly keep track of your expenses. With one click,
            you can view what you will have at breakfast, lunch and dinner for
            the five or seven days ahead, and buy the necessary ingredients on
            the spot if you wish it. Moreover, the recipes show the amount of
            nutrients and calories you are absorbing at every meal so that it
            gives you a hand if you are on a diet. If you are concerned about
            food waste, Tesco even caters about your surplus foodstuffs, thanks
            to its convenient leftovers tool. You only have to enter the
            ingredients you need to vacate from your fridge and the website will
            generate a list of recipes out of these. How not to buy from Tesco
            when it gives you so much convenience? This is content marketing
            strategy at its best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
