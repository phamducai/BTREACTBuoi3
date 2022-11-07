import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    return (
      <div style={{ border: "1px solid red", padding: 30 }}>
        <h2>Tên Sản phẩm: {this.props.item?.name} </h2>
        <img alt="" src={this.props.item?.image} />
        <h2>Giá: {this.props.item?.price} </h2>
        <h2>Mô tả: {this.props.item?.description} </h2>
        <h2>Số lượng : {this.props.item?.quantity}</h2>
      </div>
    );
  }
}
