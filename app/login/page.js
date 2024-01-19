import LoginForm from "../ui/login-page/form-login";
import IconWavesMove from "../ui/login-page/login-svg";
import LogoInLoginPage from "../ui/login-page/logo-login";


export default function Login() {
  return (
    <div className=" relative flex  justify-center bg-blue-500 animate-backgroundAnimate items-center h-[100vh]">
      <div className="mr-[100px]">
        <LogoInLoginPage />
      </div>
      <LoginForm />
      <IconWavesMove />
    </div>
  );
}
