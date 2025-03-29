function Input({ name, type = "text", register, errorMessage, placeholder }) {
  return (
    <>
      <input type={type} {...register(name)} placeholder={placeholder} />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <br />
    </>
  );
}

export default Input;
