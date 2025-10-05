import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center bg-black">
        <BackgroundBeams />
        <div className="z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl  font-bold  text-white mb-6 bg-clip-text text-transparent">
            Clinic Management System
          </h1>
    
          <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
            Experience seamless patient management, efficient appointment scheduling, and comprehensive 
            diagnostic tracking all in one intuitive platform. Our clinic management system empowers 
            healthcare professionals to focus on what matters most—providing exceptional patient care 
            while we handle the administrative complexities.
          </p>
          <div className="flex gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Get Started</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-black border-gray-800 text-white">
                <form>
                  <DialogHeader>
                    <DialogTitle className="text-white">Get Started</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Create an account to access the platform.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1" className="text-gray-200">Name or email</Label>
                      <Input id="name-1" name="name" placeholder="Enter your name" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="password-1" className="text-gray-200">Password</Label>
                      <Input id="password-1" name="password" placeholder="Enter your password" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      
                      <Button variant="outline" className="border-gray-900 bg-gray-600 hover:bg-gray-700 hover:text-white">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-white/90 text-black hover:bg-white/80">Sign Up</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>Log In</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-black border-gray-800 text-white">
                <form>
                  <DialogHeader>
                    <DialogTitle className="text-white">Welcome Back</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Log in to your account to continue.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-3">
                      <Label htmlFor="email-login" className="text-gray-200">Email</Label>
                      <Input id="email-login" name="email" type="email" placeholder="Enter your email" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="password-login" className="text-gray-200">Password</Label>
                      <Input id="password-login" name="password" type="password" placeholder="Enter your password" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                        
                        
                         <Button variant="outline" className="border-gray-900 bg-gray-600 hover:bg-gray-700 hover:text-white">Cancel</Button>
                
                    </DialogClose>
                    <Link to="/dashboard">
                     <Button type="submit" className="bg-white/90 text-black hover:bg-white/80">Log In</Button>
                    </Link>
                  </DialogFooter>

                </form>
              </DialogContent>
            </Dialog>
          </div>
              
        </div>
    </div>
  )
}

export default LandingPage