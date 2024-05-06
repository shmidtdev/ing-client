"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {RightArrowWhiteIcon} from "@/Icons";

const formSchema = z.object({
  email: z.string().email(),
})

export default function SubscriptionForm(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="text-white mb-4">Подписывайтесь на наши обновления</div>
              <div className="flex gap-2">
                <FormControl>
                  <Input placeholder="Ваша почта" {...field} />
                </FormControl>
                <Button type="submit" variant="custom">
                  <RightArrowWhiteIcon />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">
          <div className="">
            <Checkbox id="terms" className="border-white"/>
          </div>
          <label
            htmlFor="terms"
            className="text-sm my-auto ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
          >
            Согласен c <Link href="#" className="text-blue-700 underline hover:text-blue-500">политикой конфиденциальности</Link>
          </label>
        </div>
      </form>
    </Form>
  )
}