const InputForm = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border-[0.5px] border-slate-300 rounded text-sm text-slate-600 py-2 px-2 mt-1 placeholder:opacity-75"
    />
  );
};

export default InputForm;
