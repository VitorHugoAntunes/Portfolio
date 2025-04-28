"use client"

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useTranslation } from './translation-provider';
import { getNestedTranslation } from '@/utils/getTranslation';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { translations } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className='cursor-pointer' 
          title={theme === 'light' ? getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.light', '') : theme === 'dark' ? getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.dark', '') : getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.system', '')}
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            {getNestedTranslation(translations, 'navBar.buttons.themeToggle.title', 'Toggle theme')}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.light', 'Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.dark', 'Dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.system', 'System')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
