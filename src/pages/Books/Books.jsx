// import React from 'react';

import { useContext, useState } from "react";
import { BookContext } from "../../BookProvider/BookProvider";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadlist from "../../components/Listedbook/ListedReadlist";
import ListedwishList from "../../components/Listedbook/ListedwishList";

const Books = () => {
  const [sortingtype, setSortingType] = useState("");

  return (
    <div className="max-w-[90%] mx-auto mt-10">
      <div className="my-9 flex justify-center">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by {sortingtype}⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedReadlist sortingtype={sortingtype}></ListedReadlist>
        </TabPanel>
        <TabPanel>
          <ListedwishList sortingtype={sortingtype}></ListedwishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
