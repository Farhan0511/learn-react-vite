const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 font-bold mt-2">
      {children}
    </label>
  );
};

export default Label;
