import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPopUp, setShowPopup] = useState(true);
  const [user, setUser] = useOutletContext();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      const userInfo = await response.json();
      console.log(userInfo);
    },
  });

  if (user) {
    return <Navigate to="/" />;
  } else {
    return showPopUp ? (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-100">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 relative sm:max-w-md"
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:3000/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(login),
            });
            if (response.ok) {
              const auth = await response.json();
              localStorage.setItem("token", auth.token);
              setUser(auth.user);
              navigate("/");
            } else {
              const message = await response.text();
              alert(message);
            }
          }}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setShowPopup(false)} // Menutup pop-up saat tombol diklik
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-center text-2xl font-semibold mb-4">Login</h1>
          <div className="mb-4">
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              autoFocus
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <TextField
              variant="outlined"
              type="password"
              label="Kata sandi"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Button
              variant="contained"
              className="text-sm text-gray-600 hover:bg-gray-200 mb-2 sm:mb-0"
            >
              Buat akun
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </Button>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="mt-6 text-blue-500 italic px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-red-300"
              onClick={() => googleLogin()}
            >
              Login dengan Google
            </button>
          </div>
        </form>
      </div>
    ) : null;
  }
}
