import { useContext } from "react";
import Protected from "../components/Protected";
import { UserCont } from "../App";
const Contact = () => {
  const { user } = useContext(UserCont);

  return (
    <Protected>
      <div className="p-30px 40px w-full bg-gray-200">
        <div className="p-10px 20px">
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <form method="POST" className="flex flex-col items-center">
              <input
                type="text"
                name="Name"
                value={user.name}
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <input
                type="email"
                name="Email"
                value={user.email}
                placeholder="Enter Your E-mail"
                autoComplete="off"
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <input
                type="text"
                name="Subject"
                value={user.telephone}
                placeholder="Enter Your Subject"
                autoComplete="off"
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <textarea
                name="Message"
                value={user.address}
                placeholder="Your Message"
                autoComplete="off"
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 max-w-sm mt-5 resize-none"
              />
              {user ? (
                <button
                  type="submit"
                  className="mt-8 py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-700  cursor-pointer"
                >
                  Send
                </button>
              ) : (
                <button
                  type="submit"
                  className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                  Login to Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </Protected>
  );
};
export default Contact;
