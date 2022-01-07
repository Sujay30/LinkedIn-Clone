import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const newsArticle = (heading, subtitle) => (
  <div className="widgets__article">
    <div className="widgets__articleleft">
      <FiberManualRecord />
    </div>
    <div className="widgets__articleright">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Now LinkedIn will let professionals connect with people in Hindi",
        "Top news - 9099 -readers"
      )}
      {newsArticle("CoronaVirus: India Update", "Top news - 999 -readers")}
      {newsArticle("Omicron upates in india", "Top news - 450 -readers")}
      {newsArticle("Teesla Hit new Hights", "Top news - 596 -readers")}
      {newsArticle("Is redux too good? ", "Top news - 449 -readers")}
      {newsArticle(
        "vibrant gujarat 2022 got cenceled ",
        "Top news - 349 -readers"
      )}
      {newsArticle(
        "In security breach, PM Modi stuck on Punjab flyover for 20 minutes",
        "Top news - 299 -readers"
      )}
    </div>
  );
}

export default Widgets;
