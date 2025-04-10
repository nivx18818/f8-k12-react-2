function TextInput({ type="text", name, register, message, ...rest }) {
  return (
    <div>
      <input type={type} name={name} {...register} {...rest} />
      {message && <p style={{color: "red"}}>{message}</p>}
    </div>
  );
}

export default TextInput;
