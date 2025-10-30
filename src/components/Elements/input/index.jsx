import Label from "./Label";
import InputForm from "./Input";

const IndexForm = ({ type, label, name, placeholder }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <InputForm name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default IndexForm;
