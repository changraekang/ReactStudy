import React from "react";

const ArrayPractics = () => {
  const names = ["아이언맨", "헐크", "토르", "스파이디"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default ArrayPractics;
