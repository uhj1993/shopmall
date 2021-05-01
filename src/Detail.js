import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
// css를 미리 입혀놓은 컴포넌트
import "./Detail.scss";

let Div = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  let history = useHistory();
  let { id } = useParams(); // {사용자가 입력한 URL }
  let shoesInfo = props.shoes.find(function (item) {
    return item.id == id;
  });

  return (
    <div className="container">
      <Div>
        <Title color={"red"}>Detail</Title>
        <h5 className="red">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          aliquid fugiat
        </h5>
      </Div>
      <div className="my-alert-yellow">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoesInfo.title}</h4>
          <p>{shoesInfo.content}</p>
          <p>{shoesInfo.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            특정경로
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;