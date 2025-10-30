import Button from "./components/Elements/Button";
import IndexForm from "./components/Elements/Input";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 font-bold mb-2 text-3xl">Login</h1>
        <p className="font-medium text-slate-600 mb-8">
          Welcome, please enter your detail!
        </p>

        <form>
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
      </div>
    </div>
  );
}

export default App;
