type Argument = string | number | boolean | null | undefined

/**
 * Conditionally join classNames into a single string
 */
export function cn(...args: Argument[]): string {
  let str = ""

  for (let i = 0; i < args.length; i++) {
    if (args[i] && typeof args[i] === "string") {
      if (str) str += " "
      str += args[i]
    }
  }

  return str
}
