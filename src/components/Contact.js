// const Contact = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
//       <form>
//         <input
//           type="text"
//           className=" border border-black p-2 m-2"
//           placeholder="name"
//         />
//         <input
//           type="text"
//           className=" border border-black p-2 m-2"
//           placeholder="message"
//         />
//         <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Contact;


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Get in Touch With Us
      </h1>
      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
