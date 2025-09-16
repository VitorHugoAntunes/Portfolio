"use client"

import { Check, Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { getNestedTranslation } from '@/utils/get-translation'
import { useTranslation } from './translation-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { translations } = useTranslation()

  const isSelected = (value: string) => theme === value

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer"
          title={
            theme === 'light'
              ? getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.light', '')
              : theme === 'dark'
                ? getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.dark', '')
                : getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.system', '')
          }
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
        <DropdownMenuLabel>
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.titles.title', 'Select Language')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {isSelected('light') && <Check className="mr-2 h-4 w-4" />}
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.light', 'Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {isSelected('dark') && <Check className="mr-2 h-4 w-4" />}
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.dark', 'Dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {isSelected('system') && <Check className="mr-2 h-4 w-4" />}
          {getNestedTranslation(translations, 'navBar.buttons.themeToggle.system', 'System')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}