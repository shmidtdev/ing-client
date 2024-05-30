"use client"

import React, {useContext} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {ApplicationContext} from "@/app/ApplicationContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {Tabs, TabsTrigger, TabsList, TabsContent} from "../ui/tabs";
import SignInForm from "@/components/authorization/SigninForm";
import RegistrationForm from "@/components/authorization/RegistrationForm";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import axios from "axios";
import {host} from "@/env";

interface IAuthorizationModalProps {
  user: User
}

export default function AuthorizationModal() {
  const {user} = useContext(ApplicationContext)

  const handleLogout = () => {
    axios.get(`${host}/api/auth/signout`)
      .then(res => {
        if (res.data)
          window.location.reload()
      })
  }

  return (
    <>
      {user &&
          <HoverCard>
              <HoverCardTrigger asChild>
                  <div className="flex flex-col bg-midgray rounded-full w-[40px] h-[40px] hover:cursor-pointer my-auto">
                      <Avatar className="w-[40px] h-[40px]">
                        {/*<AvatarImage src="../Images/office.jpg" alt="@shadcn"/>*/}
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                  </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-1">
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      <div>{user.phone}</div>
                  </div>
                  <Button onClick={handleLogout} className="w-full mt-6">Выйти</Button>
              </HoverCardContent>
          </HoverCard>
      }
      {!user &&
          <Dialog>
              <DialogTrigger asChild>
                  <div>
                      <Button variant="outline">Войти в аккакнт</Button>
                  </div>
              </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                  </DialogHeader>
                  <DialogBody>
                      <Tabs defaultValue="sing-in" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="sign-in">Войти</TabsTrigger>
                              <TabsTrigger value="registration">Зарегистрироваться</TabsTrigger>
                          </TabsList>
                          <TabsContent value="sign-in">
                              <SignInForm/>
                          </TabsContent>
                          <TabsContent value="registration">
                              <RegistrationForm/>
                          </TabsContent>
                      </Tabs>
                  </DialogBody>
              </DialogContent>
          </Dialog>
      }
    </>
  )
}
