"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contextAPI/ThemeContext"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        theme === "dark" 
          ? "bg-[#b0aaaa3f] border border-[#b0aaaa3f]" 
          : "bg-[#f7fcfc3f] border border-[#f7fcfc3f]",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            theme === "dark" 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-8 bg-gray-200"
          )}
        >
          {theme === "dark" ? (
            <Moon 
              className="w-4 h-4 text-white" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-4 h-4 text-gray-700" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            theme === "dark" 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          {theme === "dark" ? (
            <Sun 
              className="w-4 h-4 text-gray-500" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-4 h-4 text-black" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
}