import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowsDimension";

const WritingSpace = (props) => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [cols, setCols] = useState(20);
  const { height, width } = useWindowDimensions();

  // To get the width of the text area equal to the width of the heading input element

  const changeCols = () => {
    let ele = document.getElementsByClassName("content-input")[0];
    ele.setAttribute("cols", 20);
    let eleWidth = document
      .getElementsByClassName("heading-input")[0]
      .getBoundingClientRect().width;
    console.log(eleWidth, ele.getBoundingClientRect().width);
    while (eleWidth > ele.getBoundingClientRect().width) {
      ele.setAttribute("cols", +ele.cols + 1);
    }
    ele.setAttribute("cols", +ele.getAttribute("cols") - 3);
    setCols(ele.cols);
    //console.log("changing cols", ele.cols);
  };

  useEffect(() => {
    const time = setTimeout(changeCols, 1100);
    return () => {
      clearTimeout(time);
    };
  }, [width, height, props.showList]);

  const onEntering = () => {
    let temp = 0;
    let rows = content.split("\n").map((element) => {
      if (element.length / cols > 1) {
        temp++;
      }
      return element;
    }).length;
    document.getElementsByClassName("content-input")[0].rows = temp + rows + 10;
  };

  useEffect(onEntering, [content, cols]);

  return (
    <div className="writing-space">
      <input
        type="text"
        placeholder="Heading..."
        className="heading-input"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      ></input>
      <div className="small-border-bottom"></div>
      <textarea
        placeholder="Write here...."
        className="content-input"
        cols="20"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          onEntering();
        }}
      ></textarea>
    </div>
  );
};

export default WritingSpace;
