import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { getFirestore } from "firebase/firestore";

export const Form = ({ handleId }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { totalPrice, cart } = useContext(CartContext);
  const total = totalPrice();

  const handleSubmit = (e) => {
    const db = getFirestore();
    e.preventDefault();
    const orden = {
      buyer: { name, phone, email, address },
      date: serverTimestamp(),
      cart,
      total,
    };
    const refOrden = collection(db, "orders");
    addDoc(refOrden, orden).then((res) => {
      handleId(res.id);
    });
  };

  const handleName = (e) => setName(e.target.value);

  const handlePhone = (e) => setPhone(e.target.value);

  const handleEmail = (e) => setEmail(e.target.value);

  const handleAddress = (e) => setAddress(e.target.value);

  return (


    // <form action="" onSubmit={handleSubmit}>
    //     <input
    //         type="text"
    //         name="nombre"
    //         placeholder="Nombre Completo"
    //         value={nombre}
    //         onChange={handleNombre}
    //         required
    //     />
    //     <input
    //         type="number"
    //         name="telefono"
    //         placeholder="Telefono"
    //         value={telefono}
    //         onChange={handleTelefono}
    //     />
    //                 <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={handleEmail}
    //     />
    //     <button>Enviar</button>
    // </form>



    <form className="container w-100" action="" onSubmit={handleSubmit}>
      <div className="form-row row justify-content-md-center">
        <div className="form-group col-md-3">
        <label for="inputEmail4">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
            onChange={handleName}
            required
          />
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            onChange={handleEmail}
            required
          />
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={handleAddress}
            required
          />
                  <label for="inputEmail4">Phone</label>
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            placeholder="Phone"
            onChange={handlePhone}
            required
          />
          <hr className="col-md-12" />
          <button className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
