import ReactDOM from "react-dom";

const ele = document.getElementById("portal-root");

//const Portal = ReactDOM.createPortal(this.props.children, ele);

const Portal = (props) => {
  return ReactDOM.createPortal(props.children, ele);
};

export default Portal;
