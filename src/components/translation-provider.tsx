'use client'

import { createContext, useContext, useEffect, useState } from 'react';

export type NestedTranslation = {
  [key: string]: string | string[] | NestedTranslation;
};

type Language = 'en' | 'pt'

type TranslationContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: NestedTranslation
  isLoading: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const loadTranslations = (language: Language): Promise<NestedTranslation> => {
  switch (language) {
    case 'pt':
      return import('@/locales/pt-br.json').then((module) => module.default as NestedTranslation);
    case 'en':
    default:
      return import('@/locales/en.json').then((module) => module.default as NestedTranslation);
  }
};

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    return (localStorage.getItem('language') as Language) || 'en'
  })
  const [translations, setTranslations] = useState<NestedTranslation>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadTranslations(language).then((translationsData) => {
      setTranslations(translationsData)
      setIsLoading(false)
    })

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const value = {
    language,
    setLanguage,
    translations,
    isLoading,
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)

  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }

  return context
}