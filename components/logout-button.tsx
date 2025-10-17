
'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <button
      onClick={handleLogout}
      className="small-ai-button px-4 py-2 rounded-sm font-bold inline-flex items-center space-x-2"
    >
      <LogOut className="h-4 w-4" />
      <span>Log Out</span>
    </button>
  )
}
