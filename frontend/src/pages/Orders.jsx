// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import Title from "../component/Title";

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }
//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         let allOrdersItem = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             allOrdersItem.push(item);
//           });
//         });
//         setOrderData(allOrdersItem);
//       }
//     } catch (error) {}
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div>
//       <div>
//         {/* CONTAINER */}
//         <div>
//           <Title title1={"Order"} title2={"List"} />
//           {orderData.map((item, i) => (
//             <div key={i} className="bg-white p-2 mt-3 rounded-lg">
//               <div className="text-gray-700 flex flex-col gap-4">
//                 <div className="flex gap-x-3 w-full">
//                   {/* IMAGE */}
//                   <div className="">
//                     <img
//                       src={item.image[0]}
//                       alt="orderImg"
//                       className="sm:w-[99px] rounded-lg aspect-square object-cover"
//                     />
//                   </div>
//                   {/* ORDER INFO */}
//                   <div className="block w-full">
//                     <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
//                     <div className="flexBetween flex-wrap">
//                       <div>
//                         <div>
//                           <div className="flexCenter gap-x-2">
//                             <h5 className="medium-14">Price:</h5>
//                             <p>
//                               {currency}
//                               {item.price}
//                             </p>
//                           </div>
//                           <div className="flexCenter gap-x-2">
//                             <h5 className="medium-14">Quantity:</h5>
//                             <p>{item.quantity}</p>
//                           </div>
//                           <div className="flexCenter gap-x-2">
//                             <h5 className="medium-14">Color:</h5>
//                             <p>{item.color}</p>
//                           </div>
//                         <div className="flex items-center gap-x-2">
//                           <h5 className="medium-14">Date:</h5>
//                           <p>{new Date(item.date).toDateString()}</p>
//                         </div>
//                         <div className="flex items-center gap-x-2">
//                           <h5 className="medium-14">Payment:</h5>
//                           <p>{item.paymentMethod}</p>
//                         </div>
//                         </div>
//                         <div>
//                           {/* STATUS AND BUTTON */}
//                           <div>
//                             <div>
//                               <p></p>
//                               <p>{item.status}</p>
//                             </div>
//                             <button className="btn-secondary !p-1.5 !py-1 !text-xs">
//                               Track Order
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   </div>
//                 </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Title from "../component/Title";
import Footer from "../component/Footer";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="py-6">
        <Title
          title1="Order"
          title2="List"
          title1Styles={"h3"}
          titleStyles={"pb-5"}
        />
        <div className="space-y-4 mt-6">
          {orderData.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                  <div className="grid grid-cols-2 gap-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Price:</span>
                      <span>
                        {currency}
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Quantity:</span>
                      <span>{item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Color:</span>
                      <span>{item.color}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Date:</span>
                      <span>{new Date(item.date).toDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Payment:</span>
                      <span>{item.paymentMethod}</span>
                    </div>
                  </div>
                </div>
                <p className="min-w-2 h-2 rounded-full bg-green-500 mt-[4px] mr-0"></p>
                <div className="flex flex-col  justify-between">
                  <div className="text-sm text-gray-600">
                    <p>{item.status}</p>
                  </div>
                  <button className="px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
