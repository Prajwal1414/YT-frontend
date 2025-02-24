import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ArrowLeft, Bell, Menu, Search, User } from "lucide-react";
import Button from "./Button";
import { Upload, Mic } from "lucide-react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-2 mx-2  ">
      <div
        className={`gap-4 flex-shrink-0 items-center pl-4 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-10" />
        </a>
      </div>
      <form
        className={`sm:flex  gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden"
        }`}
      >
        <Button variant="ghost" size="icon" onClick={() => setShowFullWidthSearch(false)}  className={`flex-shrink-0 ${showFullWidthSearch ? "flex" : "hidden"}`}>
          <ArrowLeft />
        </Button>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 w-full outline-none focus:border-blue-500 "
          />
          <Button className="py-2 px-4 flex-shrink-0 rounded-r-full border border-secondary-border border-l-0">
            <Search />
          </Button>
        </div>
        <Button size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
