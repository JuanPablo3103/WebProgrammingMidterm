import { useState } from 'react';
import Swal from 'sweetalert2';
import logo from '../assets/logo.svg';

export const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isRemembered, setIsRemembered] = useState(false);

  const validateForm = () => {
    if (!user || !pass) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please enter both username and password.',
        confirmButtonColor: '#3085d6',
      });
      return false;
    }
    return true;
  };

  const submitLogin = () => {
    if (!validateForm()) return;
    console.log({
      username: user,
      password: pass,
      remember: isRemembered,
    });
  };

  const renderDecorations = () => (
    <>
      <div className="absolute top-4 left-25 w-[220px] h-[220px] bg-[#66c7ff] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
      <div className="absolute top-10 right-2 w-[320px] h-[320px] bg-indigo-400 rounded-full translate-x-1/3 -translate-y-1/2 z-0" />
    </>
  );

  const renderBottomBar = () => (
    <div className="absolute bottom-0 left-0 w-full h-[30px] bg-sky-500 sm:hidden" />
  );

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#e6f7ff] px-4 overflow-hidden">
      {renderDecorations()}

      <section className="flex flex-col items-center w-full max-w-sm p-2 z-20 mt-40">
        <figure className="flex justify-center mb-2 h-38 w-38">
          <img src={logo} alt="User logo" />
        </figure>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
          className="w-60 mb-5 px-4 py-2.5 rounded-xl bg-[#7377ff] text-white placeholder-white text-center text-lg"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          className="w-60 mb-4 px-4 py-2.5 rounded-xl bg-[#7377ff] text-white placeholder-white text-center text-lg"
        />

        <div className="flex items-center justify-center mb-4">
          <input
            type="checkbox"
            checked={isRemembered}
            onChange={(e) => setIsRemembered(e.target.checked)}
            className="mr-2 accent-sky-400 scale-110"
          />
          <label className="text-sky-500 mb-1 ml-3">Remember me</label>
        </div>

        <button
          onClick={submitLogin}
          className="w-40 mt-8 bg-sky-500 text-white py-2.5 rounded-xl mb-2 hover:bg-sky-600 transition text-lg"
        >
          Sign in
        </button>

        <p className="text-center text-sm mt-1 text-sky-500 cursor-pointer">
          Forgot password?
        </p>
      </section>

      {renderBottomBar()}
    </div>
  );
};
