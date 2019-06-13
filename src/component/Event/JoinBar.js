import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Checkbox, Button, message } from "antd";
import "./JoinBar.css";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

function JoinBar(props) {
  const { id, preparefoods } = props;
  const [foodNames, setFoodNames] = useState([]);

  const _postData = () => {
    Axios.post(
      `${URL}/events/book/${id}`,
      { foodNames },
      {
        headers: { authorization: localStorage.getItem("token") }
      }
    ).then(data => console.log(data));
  };

  const _selectHandler = ({ target }) => {
    if (target.checked) {
      if (!foodNames.includes(target.value)) {
        setFoodNames(foodNames.concat(target.value));
      } else {
        message.error("This is a ");
      }
    } else {
      let index = foodNames.indexOf(target.value);
      let changeFoods = foodNames.slice();
      changeFoods.splice(index, 1);
      setFoodNames(changeFoods);
    }
  };

  const _buttonHandler = e => {
    if (localStorage.getItem("token")) {
      _postData();
    } else {
      message.error("Please, Log in!!");
    }
  };

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJJbi15b3VuZyIsImxhc3ROYW1lIjoiSnVuZyIsImVtYWlsIjoiaml5NTUyMEBuYXRlLmNvbSIsInByb2ZpbGVJbWciOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0yMDkxMDU1NjA0MzM3MTE3JmhlaWdodD01MCZ3aWR0aD01MCZleHQ9MTU2MjQ3ODk1NSZoYXNoPUFlUnlueHQyMER4U0Q0MWYiLCJpZCI6NjcsImlhdCI6MTU1OTg4Njk1NSwiZXhwIjoxNTYwNDkxNzU1fQ.qmHaEZU03hSR_OJoTVK4ObZDfOQqSmqNCElAwZ74EDw"
  );

  return (
    <div className="box JoinHostBar-container">
      {console.log(foodNames)}
      <div id="JoinHostBar-check">
        <div style={{ width: "80%", margin: "auto" }}>
          {preparefoods.map((food, i) => {
            return (
              <Checkbox
                className="JoinHostBar-checkBox"
                value={food.name}
                onChange={_selectHandler}
                key={i}
              >
                {food.name}{" "}
              </Checkbox>
            );
          })}
        </div>
      </div>
      <div id="JoinHostBar-buttonBox">
        <Button id="JoinHostBar-button" onClick={_buttonHandler}>
          Join
        </Button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ viewEvent }) => ({
  id: viewEvent.id,
  preparefoods: viewEvent.preparefoods
});
// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps)(JoinBar);
