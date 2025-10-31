import Button from "../Elements/Button";
import IndexForm from "../Elements/Input";

function FormLogin() {
  return (
    <form action="">
      <IndexForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />

      <IndexForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />

      <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
