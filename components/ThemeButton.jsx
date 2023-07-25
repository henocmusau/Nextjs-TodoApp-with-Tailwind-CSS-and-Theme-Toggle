'use client'

import { useContext } from 'react'

import ThemeContext from '@/utils/context/theme'

import { BsMoonFill, BsSunFill } from 'react-icons/bs'

export default function ThemeButton() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            {theme === 'dark' &&
                <BsSunFill
                    className='text-2xl cursor-pointer hover:text-slate-100 duration-300'
                    onClick={() => setTheme('light')}
                />
            }
            {theme === 'light' &&
                <BsMoonFill
                    className='text-2xl cursor-pointer hover:text-slate-100 duration-300'
                    onClick={() => setTheme('dark')}
                />
            }
        </>
    )
}
