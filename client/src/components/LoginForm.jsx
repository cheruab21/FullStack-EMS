import { ArrowLeftIcon, EyeOffIcon } from "lucide-react"
import LoginLeftside from "./LoginLeftSide"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { EyeIcon } from "lucide-react"


const LoginForm = ({role, title, subtitle}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <LoginLeftside />
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in">
        <Link to="/login" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors duration-200">
          <ArrowLeftIcon size={16}/> Back to Portal Selection
        
        </Link>

        <div className=" mb-8">
          <h1 className="text-2x1 sm:text-3x1 font-medium text-zinc-900">{title}</h1>
          <p className="text-slate-500 text-sm sm:text-base mt-2">{subtitle}</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mx-auto"></div>
            <p className="text-center mt-2">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required placeholder='cherletsa@gmail.com'
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">Password</label>
             <div className="relative">
             <input 
               type={showPassword ? "text" : "password"} 
               id="password" 
               value={password} 
               onChange={(e) => setPassword(e.target.value)} 
               required 
               placeholder='Enter your password'
               className="mt-1 block w-full pr-11 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
             />
               <button type='button' className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors " onClick={() => setShowPassword(!showPassword)}>
                 {showPassword ? <EyeOffIcon size={18}/> : <EyeIcon size={18}/>}
               </button>
             </div>
           </div>
           <div>
            <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 disabled:bg-indigo-400">
              {loading ? 'Logging in...' : 'Login'}
            </button>
           </div>
        </form>
      </div>
      </div>
      

    </div>
  )
}

export default LoginForm