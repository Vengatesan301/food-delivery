// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import UserContext from "../utils/UserContext";

// // class About extends Component {
// //   constructor(props) {
// //     super(props);

// //     //console.log("Parent Constructor");
// //   }

// //   componentDidMount() {
// //     //console.log("Parent Component Did Mount");
// //   }

// //   render() {
// //     //console.log("Parent Render");

// //     return (
// //       <div>
       
// //         <div>
// //           LoggedIn User
// //           <UserContext.Consumer>
// //             {({ loggedInUser }) => (
// //               <h1 className="text-xl font-bold">{loggedInUser}</h1>
// //             )}
// //           </UserContext.Consumer>
// //         </div>
// //         {/* <h2>This is Namaste React Web Series</h2> */}
// //         <UserClass name={"First"} location={"Dehradun Class"} />
// //       </div>
// //     );
// //   }
// // }
// class About extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     // Lifecycle method
//   }

//   render() {
//     return (
//       <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
//         {/* Logged-in User Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Logged-In User</h1>
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h2 className="text-lg font-medium text-gray-600">
//                 {loggedInUser || "No User Logged In"}
//               </h2>
//             )}
//           </UserContext.Consumer>
//         </div>

//         {/* User Details Section */}
//         <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center justify-center">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">User Details</h2>
//           <UserClass name={"First"} location={"Dehradun Class"} />
//         </div>
//       </div>
//     );
//   }
// }

// export default About;

import React, { Component } from "react";
import User from "./User";
 import UserClass from "./UserClass";
 import { Component } from "react";
 import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // return (
    //   <div className="p-4 max-w-4xl mx-auto">
    //     {/* Hero Section */}
    //     <div className="text-center py-8 bg-orange-100 rounded-lg shadow-md">
    //       <h1 className="text-3xl font-bold text-orange-700 mb-4">About Us</h1>
    //       <p className="text-gray-700">
    //         Welcome to our Swiggy Clone! We are here to bring you closer to your
    //         favorite meals with just a few clicks.
    //       </p>
    //     </div>

    //     {/* Mission Section */}
    //     <div className="mt-8 text-center">
    //       <h2 className="text-2xl font-semibold mb-4 text-gray-800">
    //         Our Mission
    //       </h2>
    //       <p className="text-gray-600">
    //         To make food delivery simple, reliable, and enjoyable for everyone.
    //       </p>
    //     </div>

    //     {/* Meet the Team Section */}
    //     <div className="mt-8">
    //       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
    //         Meet the Team
    //       </h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //         <div className="p-4 border rounded-lg shadow-md bg-white text-center">
    //           <h3 className="text-lg font-bold text-gray-700">John Doe</h3>
    //           <p className="text-gray-600">Founder & CEO</p>
    //         </div>
    //         <div className="p-4 border rounded-lg shadow-md bg-white text-center">
    //           <h3 className="text-lg font-bold text-gray-700">Jane Smith</h3>
    //           <p className="text-gray-600">CTO</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Stats Section */}
    //     <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md text-center">
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
    //         Our Achievements
    //       </h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    //         <div>
    //           <h3 className="text-lg font-bold text-orange-500">500+</h3>
    //           <p className="text-gray-600">Restaurants</p>
    //         </div>
    //         <div>
    //           <h3 className="text-lg font-bold text-orange-500">10k+</h3>
    //           <p className="text-gray-600">Orders Delivered</p>
    //         </div>
    //         <div>
    //           <h3 className="text-lg font-bold text-orange-500">100+</h3>
    //           <p className="text-gray-600">Cities Served</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* User Context Section */}
    //     <div className="mt-8 text-center">
    //       <h2 className="text-xl font-bold text-gray-800 mb-4">Logged-in User</h2>
    //       <UserContext.Consumer>
    //         {({ loggedInUser }) => (
    //           <p className="text-gray-600">{loggedInUser || "Guest"}</p>
    //         )}
    //       </UserContext.Consumer>
    //     </div>
    //   </div>
    // );
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Page Header */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover who we are and why we do what we do.
          </p>
        </header>
  
        {/* Why Choose Us Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your food delivered to your doorstep in less than 30 minutes.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We partner with the best restaurants to bring you fresh,
                high-quality meals.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our support team is available round the clock to assist you.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Affordable Prices
              </h3>
              <p className="text-gray-600">
                Enjoy delicious meals at the best prices in town.
              </p>
            </div>
          </div>
        </div>
  
       
  
        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Satisfy Your Hunger?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of happy customers who trust us for their meals.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
            Order Now
          </button>
        </div>
        <div className="mt-8 text-center">
           <h2 className="text-xl font-bold text-gray-800 mb-4">Logged-in User</h2>
           <UserContext.Consumer>
             {({ loggedInUser }) => (
              <p className="text-gray-600">{loggedInUser || "Guest"}</p>
            )}
          </UserContext.Consumer>
        </div>

        

        
      </div>
    );
 
  }
}




export default About;

