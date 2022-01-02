import React from "react";
import propTypes from "prop-types";

const Kang = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요 제이름은 {name}
      <br />
      children값은 {children}
    </div>
  );
};

Kang.propTypes = {
  name: propTypes.string,
};

Kang.defaultProps = {
  name: "강창래",
};
export default Kang;
