export default function getFullName(names: (string | undefined)[]): string | '---' {
  if (!names || names?.length === 0) return '---'
  return names?.filter(Boolean)?.join(' ') || '---'
}