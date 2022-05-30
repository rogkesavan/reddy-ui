import { Link } from "react-router-dom";
import { ReactComponent as ForgetImg } from '../../assets/svg/auth/forget3.svg';
import AnimeInputField from "../Common/AnimeInputField";

function ForgetPass() {
  return (
    <div className="dc auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc pb-8 rounded-l-2xl bg-slate-50 max-h-[420px]">
          <ForgetImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <p className="w-fit -ml-4 py-2 px-6 bg-[#dfe7fe] rounded-r-full">See you soon</p>

          <header className="mt-auto mb-4 px-4 text-2xl">Foget Password</header>

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inpCls="border-0 border-b"
            txt="Email"
          />

          <button className="mt-6 px-8 bg-[#dfe7fe] hover:bg-[#b0c3fd] transition-colors mx-auto rounded-full">Submit</button>

          <Link className="mb-auto hover:text-[#375fd8]" to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass