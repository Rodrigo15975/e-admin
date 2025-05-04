'use client'

import {
  SidebarFooter as ShadcnSidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { LogOut } from 'lucide-react'
import { Button } from '../ui/button'

export function SidebarFooter() {
  return (
    <ShadcnSidebarFooter className="mt-auto border-t border-border/40 p-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="gap-3 px-2" tooltip="Log out">
            <Button
              variant={'outline'}
              className="  hover:bg-primary hover:text-white "
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </Button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </ShadcnSidebarFooter>
  )
}
