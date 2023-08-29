import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../utils.js";

export default function Register() {
  const navigate = useNavigate();
  const [showPopUp, setShowPopup] = useState(true);
  const [register, setRegister] = useState({});

  return showPopUp ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 relative sm:max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(register);
          api.post("/auth/daftar", register).then((pesan) => {
            alert(pesan);
            setRegister({});
            navigate("/login");
          });
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
        <h1 className="text-center text-2xl font-semibold mb-4">Register</h1>
        <div className="mb-4">
          <TextField
            variant="outlined"
            type="text"
            label="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            autoFocus
            value={register.name ?? ""}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <TextField
            variant="outlined"
            type="number"
            label="Telephone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            autoFocus
            value={register.telephone ?? ""}
            onChange={(e) =>
              setRegister({ ...register, telephone: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <TextField
            variant="outlined"
            type="text"
            label="Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            autoFocus
            value={register.address ?? ""}
            onChange={(e) =>
              setRegister({ ...register, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            autoFocus
            value={register.email ?? ""}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Button
            variant="contained"
            type="submit"
            className="text-sm text-gray-600 hover:bg-gray-200 mb-2 sm:mb-4"
          >
            Save
          </Button>
          <Link to={"/login"}>
            <Button
              variant="contained"
              className="bg-blue-500 text-white sm:mt-4 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  ) : null;
}
