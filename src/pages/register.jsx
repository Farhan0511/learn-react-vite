import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

function RegisterPage() {
    return(
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    );
}

export default RegisterPage;