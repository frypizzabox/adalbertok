import { personal } from '../data/personal'

export function Footer() {
  return (
    <footer className="border-t border-soul-ash py-8 px-6 text-center">
      <p className="font-mono text-xs text-soul-gray">
        &copy; {new Date().getFullYear()} {personal.name}
      </p>
    </footer>
  )
}
