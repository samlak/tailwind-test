import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";

function Header () {
  return (
    <>
      <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-400">&nbsp;</div>
      <div className="flex justify-between px-5 py-5 shadow-lg rounded-bl-3xl rounded-br-3xl bg-white">
        <img src={logo} alt="Logo" className="" height="50px" width="80px" />

        <img src={profile} alt="Profile" className="rounded-full border-2 p-0.5 border-gray-500" height="55px" width="55px" />
      </div>
    </>
  )
}

export default Header;