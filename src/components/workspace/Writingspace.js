import { useEffect, useState } from "react";
import Loader from "../Others/Loader";
import useWindowDimensions from "./useWindowsDimension";

const WritingSpace = ({
  selected,
  showList,
  change,
  setChange,
  savedContent,
  savedHeading,
  setSavedContent,
  setSavedHeading,
  updating,
  setUpdating,
  setRefresh,
  font,
}) => {
  const [heading, setHeading] = useState(selected.heading);
  const [content, setContent] = useState(selected.content);
  const [cols, setCols] = useState(20);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (heading !== savedHeading || content !== savedContent) {
      if (!change) {
        setChange(true);
      }
    } else {
      setChange(false);
    }
  }, [heading, content, savedContent, savedHeading, change, setChange]);

  useEffect(() => {
    if (!updating) {
      return;
    }
    fetch("/data/updatenote", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note_id: selected.note_id,
        heading,
        content,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.note_id) {
          setSavedContent(data.content);
          setSavedHeading(data.heading);
          setRefresh((d) => d + 1);
          setUpdating(false);
        }
      });
  }, [updating]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (change) {
      setUpdating(true);
    }
    setHeading(selected.heading);
    setContent(selected.content);
    setSavedHeading(selected.heading);
    setSavedContent(selected.content);
    if (!selected.note_id) {
      return;
    }
    fetch("/data/note/" + selected.note_id)
      .then((data) => data.json())
      .then((data) => {
        if (
          data.heading !== selected.heading ||
          data.content !== selected.content
        ) {
          setHeading(data.heading);
          setContent(data.content);
          setSavedHeading(data.heading);
          setSavedContent(data.content);
        }
      });
  }, [selected]); //eslint-disable-line react-hooks/exhaustive-deps

  // To get the width of the text area equal to the width of the heading input element

  const changeCols = () => {
    let ele = document.getElementsByClassName("content-input")[0];
    ele.setAttribute("cols", 20);
    let eleWidth = document
      .getElementsByClassName("heading-input")[0]
      .getBoundingClientRect().width;
    //console.log(eleWidth, ele.getBoundingClientRect().width);
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
  }, [width, height, showList, font]);

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

  if (selected === {}) {
    return <Loader></Loader>;
  }

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
        style={{ fontSize: font + "rem" }}
      ></textarea>
    </div>
  );
};

export default WritingSpace;
