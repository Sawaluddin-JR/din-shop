import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Protected from "../components/Protected";
const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://e-commerce-contact-ba862-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your Message sent");
    } else {
      alert("An error occured");
    }
  };
  return (
    <Protected>
      <div className="p-30px 40px w-full bg-gray-200">
        <div className="p-10px 20px">
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <form method="POST" className="flex flex-col items-center">
              <input
                type="text"
                name="Name"
                value={users.Name}
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
                onChange={data}
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <input
                type="email"
                name="Email"
                value={users.Email}
                placeholder="Enter Your E-mail"
                autoComplete="off"
                onChange={data}
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <input
                type="text"
                name="Subject"
                value={users.Subject}
                placeholder="Enter Your Subject"
                autoComplete="off"
                onChange={data}
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 mt-5"
              />
              <textarea
                name="Message"
                value={users.Message}
                placeholder="Your Message"
                autoComplete="off"
                onChange={data}
                className="px-3 py-3 border-b border-gray-600 bg-transparent w-96 max-w-sm mt-5 resize-none"
              />
              {isAuthenticated ? (
                <button
                  type="submit"
                  onClick={senddata}
                  className="mt-8 py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-700  cursor-pointer"
                >
                  Send
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => loginWithRedirect()}
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
