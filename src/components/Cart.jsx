import React, { Component } from "react";

class Cart extends Component {
  calcTotalAmount = () => {
    return this.props.cart.reduce((total, item) => {
      return total + item.quantity * item.prod.price;
    }, 0);
  };

  render() {
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="w-50 bg-white position-absolute p-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{
              top: 20,
              right: 20,
            }}
          >
            X
          </button>
          <h1 className="text-center fs-3">Giỏ hàng</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình Ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.prod.id}</td>
                    <td>{item.prod.name}</td>
                    <td>
                      <img
                        alt=""
                        src={item.prod.image}
                        style={{ width: 100 }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.adjustQuantity(item.prod.id, -1)
                        }
                        className="btn btn-info"
                        style={{ display: "inline" }}
                      >
                        -
                      </button>
                      <span className="mx-2 fs-5">{item.coutItem}</span>
                      <button
                        onClick={() =>
                          this.props.adjustQuantity(item.prod.id, 1)
                        }
                        className="btn btn-info"
                        style={{ display: "inline" }}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    <td>${item.prod.price}</td>
                    <td>${item.coutItem * item.prod.price}</td>
                    <td>
                      <button
                        onClick={() => this.props.deleteCartItem(item.prod.id)}
                        className="btn btn-danger"
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={7} className="text-end">
                  Total : ${this.props.totalMoney()}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-end">
            <button className="btn btn-primary " onClick={this.props.resetcart}>
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

// export default class Cart extends Component {
//   render() {
//     document.getElementsByTagName("body")[0].style.overflow = "hidden";
//     return (
//       <div
//         className="position-fixed w-100 h-100 top-0 left-0"
//         style={{ background: "rgb(0 0 0 / 50%)" }}
//       >
//         {" "}
//         <div
//           className="bg-white w-50 text-center positon-absolute"
//           style={{
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%,-50%)",
//             position: "absolute",
//           }}
//         >
//           <div style={{ textAlign: "end" }}>
//             <button className="btn btn-dark" onClick={this.props.hideCart}>
//               {" "}
//               X
//             </button>
//           </div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Mã SP</th>
//                 <th>Tên SP</th>
//                 <th>Hình Ảnh</th>
//                 <th>Số lượng</th>
//                 <th>Đơn giá</th>
//                 <th>Thành tiền</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.cart.map((item) => {
//                 return (
//                   <tr key={item.prod.id}>
//                     <td>{item.prod.id}</td>
//                     <td>
//                       <img
//                         src={item.prod.image}
//                         alt=""
//                         style={{ width: 100 }}
//                       />
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-info"
//                         onClick={() => {
//                           this.props.adjustQuantity(item.prod.id, -1);
//                         }}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2 fs-6">{item.quantity}</span>
//                       <button
//                         className="btn btn-info"
//                         onClick={() => {
//                           this.props.adjustQuantity(item.prod.id, 1);
//                         }}
//                       >
//                         +{" "}
//                       </button>
//                     </td>
//                     <td>{item.prod.price}</td>
//                     <td>{item.prod.price * item.quantity}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => {
//                           this.props.deleteItem(item.prod.id);
//                         }}
//                       >
//                         Xoa
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//               <tr>
//                 <td colSpan={6} className="text-end">
//                   {this.props.totalMoney()}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <button className="btn btn-primary" onClick={this.props.resetcart}>
//             Purchase
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
