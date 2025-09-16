'use client'

import { Check } from 'lucide-react'
import Flag from 'react-world-flags'

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

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation()
  const { translations } = useTranslation()

  const renderFlag = (lang: 'en' | 'pt') => {
    const countryCode = lang === 'en' ? 'US' : 'BR'
    return <Flag code={countryCode} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
  }

  const isSelected = (lang: 'en' | 'pt') => language === lang

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer relative flex items-center justify-center"
          title={
            language === 'en'
              ? getNestedTranslation(translations, 'navBar.buttons.languageToggle.titles.en', '')
              : getNestedTranslation(translations, 'navBar.buttons.languageToggle.titles.ptBR', '')
          }
          aria-label="Toggle language"
        >
          {renderFlag(language)}
          <span className="sr-only">
            {getNestedTranslation(translations, 'navBar.buttons.languageToggle.title', 'Toggle language')}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {getNestedTranslation(translations, 'navBar.buttons.languageToggle.titles.title', 'Select Language')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLanguage('pt')}>
          {isSelected('pt') && <Check className="mr-2 h-4 w-4" />}
          {renderFlag('pt')}
          <span className="ml-2">
            {getNestedTranslation(translations, 'navBar.buttons.languageToggle.ptBR', 'Portuguese')}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          {isSelected('en') && <Check className="mr-2 h-4 w-4" />}
          {renderFlag('en')}
          <span className="ml-2">
            {getNestedTranslation(translations, 'navBar.buttons.languageToggle.en', 'English')}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}