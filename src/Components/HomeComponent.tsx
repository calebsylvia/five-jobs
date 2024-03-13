import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

const HomeComponent = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-10 mb-12">5 Jobs for Caleb</h1>
      <div className="flex mx-auto space-x-10 w-5/6 justify-center mb-8">
        <CardComponent title="Discord" desc="Discord is a social platform for users to talk with people like them." link="jobone"/>
        <CardComponent title="GitStart" desc="Git Start is a code as a service company that allows people to ask for certain ideas to be coded out for them." link="jobtwo"/>
        <CardComponent title="Riot Games" desc="Riot Games is a game company that created two of the biggest games of today." link="jobthree"/>
        </div>
        <div className="flex space-x-10 mx-auto w-5/6 justify-center">
        <CardComponent title="Google" desc="Google is a multiservice company that powers most of todays online work." link="jobfour"/>
        <CardComponent title="Freelance Developer" desc="A Freelance developer is someone that takes on jobs on their on time as a career." link="jobfive"/>
        </div>
    </div>
  );
};

export default HomeComponent;
