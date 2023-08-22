import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils.js";

const EditProduct = () => {
  const [angel, setAngel] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/api/angels/${id}`)
  //       .then((response) => response.json())
  //       .then((angel) => setAngel(angel));
  //   }, [id]);

  useEffect(() => {
    api(`/products/${id}`).then((angel) => setAngel(angel));
  }, [id]);

  return (
    <main>
      {angel ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const message = await api(`/products/${angel.id}`, "PUT", angel);
            alert(message);
            navigate("/");
          }}
        >
          <h1>Edit Angel</h1>
          <label>
            Name :
            <input
              type="text"
              value={angel.name}
              onChange={(e) => setAngel({ ...angel, name: e.target.value })}
            />
          </label>
          <label>
            Task
            <input
              type="text"
              value={angel.task}
              onChange={(e) => setAngel({ ...angel, task: e.target.value })}
            />
          </label>
          <button>Simpan</button>
        </form>
      ) : (
        "loading"
      )}
    </main>
  );
};

export default EditProduct;
