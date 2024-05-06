"use client"

import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(6).max(16)
})

export default function ContactForm(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: ""
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ваше имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ваша почта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ваш телефон" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">
          <div className="">
            <Checkbox id="terms"/>
          </div>
          <label
            htmlFor="terms"
            className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Согласен c <Link href="#" className="text-blue-700 underline hover:text-blue-500">политикой конфиденциальности</Link>
          </label>
        </div>
        <Button type="submit" className="w-full">Отправить</Button>
      </form>
    </Form>
  )
}