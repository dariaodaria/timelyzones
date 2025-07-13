"use client"

import { useEffect } from 'react'

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  metaKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  action: () => void
  description: string
}

interface UseKeyboardShortcutsProps {
  shortcuts: KeyboardShortcut[]
  enabled?: boolean
}

export function useKeyboardShortcuts({ shortcuts, enabled = true }: UseKeyboardShortcutsProps) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in inputs
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return
      }

      for (const shortcut of shortcuts) {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase()
        const ctrlMatches = !!shortcut.ctrlKey === event.ctrlKey
        const metaMatches = !!shortcut.metaKey === event.metaKey
        const altMatches = !!shortcut.altKey === event.altKey
        const shiftMatches = !!shortcut.shiftKey === event.shiftKey

        if (keyMatches && ctrlMatches && metaMatches && altMatches && shiftMatches) {
          event.preventDefault()
          shortcut.action()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts, enabled])
}

export function KeyboardShortcutsHelp({ shortcuts }: { shortcuts: KeyboardShortcut[] }) {
  const formatShortcut = (shortcut: KeyboardShortcut) => {
    const keys = []
    if (shortcut.ctrlKey || shortcut.metaKey) {
      keys.push(navigator.platform.includes('Mac') ? '⌘' : 'Ctrl')
    }
    if (shortcut.altKey) keys.push(navigator.platform.includes('Mac') ? '⌥' : 'Alt')
    if (shortcut.shiftKey) keys.push('⇧')
    keys.push(shortcut.key.toUpperCase())
    return keys.join(' + ')
  }

  return (
    <div className="text-xs text-secondary space-y-1">
      <div className="font-medium mb-2">Keyboard Shortcuts:</div>
      {shortcuts.map((shortcut, index) => (
        <div key={index} className="flex justify-between">
          <span>{shortcut.description}</span>
          <kbd className="font-mono bg-muted px-1 rounded">
            {formatShortcut(shortcut)}
          </kbd>
        </div>
      ))}
    </div>
  )
}
