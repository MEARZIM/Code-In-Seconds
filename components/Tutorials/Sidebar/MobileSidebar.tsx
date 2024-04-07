"use client"
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from './Sidebar'


const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
  
    useEffect(() => {
      setIsMounted(true);
    },[])
  
    if(!isMounted) {
      return null;
    }
    return (
        <div>
          <Sheet>
            <SheetTrigger>
    
              <Button variant="ghost" size="icon" className='2xl:hidden text-white'>
                <Menu />
              </Button>
    
            </SheetTrigger>
    
            <SheetContent side="left" className='p-0 m-0'>
              <Sidebar />
            </SheetContent>
    
          </Sheet>
        </div>
      )
}

export default MobileSidebar
