import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");

  const handleChangeinput = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleClickEnviar = () => {
    let objContact = {
      name,
      email,
      tel,
      text,
    };

    console.log("objContact: ", objContact);
  };

  return (
    <div className="background-contacto">
      <form>
        <div className="primer">
          <label htmlFor="Nombre">Nombre</label>
          <input
            onChange={handleChangeinput(setName)}
            required
            type="text"
            name="Nombre"
            id="Nombre"
            value={name}
          />
        </div>
        <div className="email">
          <label htmlFor="Correo">Correo</label>
          <input
            onChange={handleChangeinput(setEmail)}
            required
            type="email"
            name="Correo"
            id="Correo"
            value={email}
          />
        </div>
        <div className="phone">
          <label htmlFor="Telefono">Telefono</label>
          <input
            onChange={handleChangeinput(setTel)}
            required
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            maxLength={10}
            name="Telefono"
            id="Telefono"
            value={tel}
          />
        </div>

        <div className="description">
          <label htmlFor="Description">Descripción</label>
          <textarea
            onChange={handleChangeinput(setText)}
            required
            type="text"
            name="description"
            id="Description"
            value={text}
          />
        </div>

        <button
          className="btn-contact"
          onClick={handleClickEnviar}
          type="button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
