import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon } from 'lucide-react'
import { UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const LoginLanding = () => {

  const portalOptions = [
    { 
      to: '/login/admin',
      title: 'Admin Portal',
      description: 'Access administrative features and manage the system.',
      icon: ShieldIcon

     },

    { 
      to: '/login/employee',
      title: 'Employee Portal',
      description: 'View your profile, attendance, and manage your leaves.',
      icon: UserIcon

   }
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-start bg-gray-100">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen"> 

      <div>

        {/* Header */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome Back</h2>
          <p className="text-slate-500">Select your portal to access your account.</p>
        </div>

        {/* Portals List */}

        <div className="space-y-4">
          {portalOptions.map((portal) => (
            <Link key={portal.to} to={portal.to} className="group block bg-slate-50 border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50">     
            <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                {portal.title}
              </h3>
              <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300"/>
            </div>       
            </Link>
            ))}

        {/* Footer */}
        <div className="mt-10 text-center md:text-left text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Cheruab. All rights reserved.
          </p>
        </div>

      </div>
      </div>
      </div>

    </div>
  )
}


export default LoginLanding