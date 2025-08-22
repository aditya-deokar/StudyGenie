"use client"

import { useEffect, useRef } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-python"
import "prismjs/themes/prism-tomorrow.css"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className="my-4 rounded-md bg-muted overflow-hidden">
      <pre className="p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
