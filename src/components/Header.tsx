import { Weight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Header() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <Weight className="text-amber-500" size={32} />
      <div className="flex items-center gap-2">
        <p className="text-zinc-200">
          Hello, <span className="font-medium text-amber-500">João</span>
        </p>
        <Avatar className="h-12 w-12 border-[2px] border-amber-500 p-[2px]">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/jvc22.png"
          />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
