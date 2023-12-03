import { Label } from '@radix-ui/react-label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

const profilesUrl = [
  {
    url: 'https://github.com/jvc22.png',
  },
  {
    url: 'https://github.com/RafaelaSchmidt.png',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/894670812504805436/1180624609410830446/5df859ae05ecf7bffbfb67aa226427a7.png?ex=657e1959&is=656ba459&hm=fd6e305f0d4408540a0b2a713a047309a605e60bea88aa69a5d11e52d915b836&',
  },
]

export default function Profile() {
  const [profile, setProfile] = useState('joao')
  return (
    <div className="dark mb-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-amber-500">Account settings</CardTitle>
          <CardDescription>Manage your information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full items-center gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">First name</Label>
              <Input id="name" value={'João Victor'} />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="surname">Surname</Label>
              <Input id="surname" value={'Costa da Silva'} />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={'joaovictorcostadasilva@usp.br'} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="mr-2 w-1/2" variant={'outline'}>
            Discard
          </Button>
          <Button className="ml-2 w-1/2">Save changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-amber-500">Change profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Select onValueChange={setProfile} defaultValue="joao">
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select a profile" />
              </SelectTrigger>
              <SelectContent className="dark">
                <SelectGroup>
                  <SelectLabel>Profile</SelectLabel>
                  <SelectItem value="joao">João Victor</SelectItem>
                  <SelectItem value="rafaela">Rafaela Carolina</SelectItem>
                  <SelectItem value="cat">E. Schrödinger</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="w-1/3" disabled={profile === 'joao'}>
              Change
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          {profile === 'joao' ? (
            <div className="flex w-full justify-center gap-8">
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px]">
                <AvatarImage
                  src={profilesUrl[0].url}
                  className="rounded-full"
                />
                <AvatarFallback>JV</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[1].url}
                  className="rounded-full"
                />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[2].url}
                  className="rounded-full"
                />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
            </div>
          ) : profile === 'rafaela' ? (
            <div className="flex w-full justify-center gap-8">
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[0].url}
                  className="rounded-full"
                />
                <AvatarFallback>JV</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px]">
                <AvatarImage
                  src={profilesUrl[1].url}
                  className="rounded-full"
                />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[2].url}
                  className="rounded-full"
                />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <div className="flex w-full justify-center gap-8">
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[0].url}
                  className="rounded-full"
                />
                <AvatarFallback>JV</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px] opacity-30">
                <AvatarImage
                  src={profilesUrl[1].url}
                  className="rounded-full"
                />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <Avatar className="h-[72px] w-[72px] border-[2px] border-amber-500 p-[4px]">
                <AvatarImage
                  src={profilesUrl[2].url}
                  className="rounded-full"
                />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
