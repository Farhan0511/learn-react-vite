import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

function LoginPage() {
    return(
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    );
}

export default LoginPage;