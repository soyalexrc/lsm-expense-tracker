import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {AlertCircle, CalendarIcon, Pencil, Plus} from "lucide-react";
import {z} from "zod";
import {Expense} from "@/lib/interfaces/expense";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import useSize from "@/lib/hooks/useSize";
import {useGetAllCategoriesQuery} from "@/lib/store/services/categories";
import {useGetUserSettingsByUserIdQuery} from "@/lib/store/services/userSettings";
import {useAddExpenseMutation, useUpdateExpenseMutation} from "@/lib/store/services/expenses";
import {toast} from "sonner";

const formSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    date: z.date(),
    category: z.string().min(1, 'Category is required'),
    paymentMethod: z.string().min(1, 'Payment method is required'),
    amount: z.string().min(1, 'Amount is required')
})

interface Props {
    data: Partial<Expense>
    children?: React.ReactNode
}

export default function ExpenseForm({data, children}: Props) {
    const [open, setOpen] = useState(false)
    const [width] = useSize()

    const {data: categories, isLoading: categoriesLoading, error: categoriesError} = useGetAllCategoriesQuery();
    const {error: usError, data: usData, isLoading: usLoading} = useGetUserSettingsByUserIdQuery();

    const [addExpense, {isSuccess}] = useAddExpenseMutation();
    const [updateExpense, {isSuccess: uSuccess}] = useUpdateExpenseMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const payload = {
            ...values,
            amount: Number(values.amount),
        }
        try {
            if (data._id !== 'null') {
                updateExpense({...payload, id: data._id})
            } else {
                addExpense(payload);
            }
            form.reset();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (isSuccess || uSuccess) {
            setOpen(false);
            toast('Se realizo la accion con exito!')
        }
    }, [isSuccess, uSuccess]);

    useEffect(() => {
        if (data._id === 'null') {
            form.reset();
        } else {
            form.setValue('title', data?.title ?? '')
            form.setValue('category', data?.category?._id ?? '')
            form.setValue('description', data?.description ?? '')
            form.setValue('paymentMethod', data?.paymentMethod ?? '')
            form.setValue('date', data?.date ? new Date(data.date) : new Date())
            form.setValue('amount', data?.amount?.toString() ?? '')
        }
    }, [data]);


    if (width >= 756) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {
                        children ? children : (
                            <Button variant='outline' autoFocus={true} size='sm'>
                                {
                                    data._id == 'null' ?
                                        <>
                                            <Plus className='mr-2'/>
                                            New Expense
                                        </> :
                                        <Pencil className="h-4 w-4"/>
                                }
                            </Button>
                        )
                    }


                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{data._id == 'null' ? 'New Expense' : 'Edit Expense'}</DialogTitle>
                        <DialogDescription>Make changes to your profile here. Click save when you&apos;re
                            done.</DialogDescription>
                    </DialogHeader>
                    <>
                        {categoriesError && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4"/>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    An error has ocurred while loading the categories, please try again.
                                </AlertDescription>
                            </Alert>
                        )}
                        {usError && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4"/>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    An error has ocurred while loading the payment methods, please try again.
                                </AlertDescription>
                            </Alert>
                        )}
                    </>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex items-end gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({field}) => (
                                        <FormItem className='flex-1'>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Title" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({field}) => (
                                        <FormItem className='flex-1'>
                                            <div className={'flex items-center justify-between'}>
                                                <FormLabel>Category</FormLabel>
                                                {/*<Button type='button' variant="outline" >*/}
                                                {/*    <Plus className="h-4 w-4 mr-2" />*/}
                                                {/*    New Category*/}
                                                {/*</Button>*/}
                                            </div>
                                            <FormControl>
                                                <Select disabled={categoriesLoading} onValueChange={field.onChange}
                                                        value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a category"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Categories</SelectLabel>
                                                            {
                                                                categories?.map(category => (
                                                                    <SelectItem key={category._id}
                                                                                value={category._id}>{category.title}</SelectItem>
                                                                ))
                                                            }
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder='Description' {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="paymentMethod"
                                render={({field}) => (
                                    <FormItem className='flex-1'>
                                        <div className={'flex items-center justify-between'}>
                                            <FormLabel>Payment method</FormLabel>
                                            {/*<Button type='button' variant="outline" >*/}
                                            {/*    <Plus className="h-4 w-4 mr-2" />*/}
                                            {/*    New Payment Method*/}
                                            {/*</Button>*/}
                                        </div>
                                        <FormControl>
                                            <Select disabled={usLoading} onValueChange={field.onChange}
                                                    value={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a payment method"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Payment Methods by user</SelectLabel>
                                                        {
                                                            usData?.paymentMethods?.map(paymentMethod => (
                                                                <SelectItem key={paymentMethod._id}
                                                                            value={paymentMethod._id}>{paymentMethod.title}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className='flex items-end gap-4'>
                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({field}) => (
                                        <FormItem className='flex-1'>
                                            <FormLabel>Date</FormLabel>
                                            <br/>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="amount"
                                    render={({field}) => (
                                        <FormItem className='flex-1'>
                                            <FormLabel>Amount</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className='w-full' type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {
                    children ? children : (
                        <Button variant='outline' size='sm'>
                            {
                                data._id == 'null' ?
                                    <>
                                        <Plus className='mr-2'/>
                                        New Expense
                                    </> :
                                    <Pencil className="h-4 w-4"/>
                            }
                        </Button>
                    )
                }
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-[425px] px-5">
                <DrawerHeader>
                    <DrawerTitle>{data._id == 'null' ? 'New Expense' : 'Edit Expense'}</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DrawerDescription>
                </DrawerHeader>
                <>
                    {categoriesError && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                An error has ocurred while loading the categories, please try again.
                            </AlertDescription>
                        </Alert>
                    )}
                    {usError && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                An error has ocurred while loading the payment methods, please try again.
                            </AlertDescription>
                        </Alert>
                    )}
                </>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex items-end gap-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({field}) => (
                                    <FormItem className='flex-1'>
                                        <div className={'flex items-center justify-between'}>
                                            <FormLabel>Category</FormLabel>
                                            {/*<Button type='button' variant="outline" >*/}
                                            {/*    <Plus className="h-4 w-4 mr-2" />*/}
                                            {/*    New Category*/}
                                            {/*</Button>*/}
                                        </div>
                                        <FormControl>
                                            <Select disabled={categoriesLoading} onValueChange={field.onChange}
                                                    value={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Categories</SelectLabel>
                                                        {
                                                            categories?.map(category => (
                                                                <SelectItem key={category._id}
                                                                            value={category._id}>{category.title}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='Description' {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({field}) => (
                                <FormItem className='flex-1'>
                                    <div className={'flex items-center justify-between'}>
                                        <FormLabel>Payment method</FormLabel>
                                        {/*<Button type='button' variant="outline" >*/}
                                        {/*    <Plus className="h-4 w-4 mr-2" />*/}
                                        {/*    New Payment Method*/}
                                        {/*</Button>*/}
                                    </div>
                                    <FormControl>
                                        <Select disabled={usLoading} onValueChange={field.onChange}
                                                value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a payment method"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Payment Methods by user</SelectLabel>
                                                    {
                                                        usData?.paymentMethods?.map(paymentMethod => (
                                                            <SelectItem key={paymentMethod._id}
                                                                        value={paymentMethod._id}>{paymentMethod.title}</SelectItem>
                                                        ))
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className='flex items-end gap-4'>
                            <FormField
                                control={form.control}
                                name="date"
                                render={({field}) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel>Date</FormLabel>
                                        <br/>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="amount"
                                render={({field}) => (
                                    <FormItem className='flex-1'>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className='w-full' type="submit">Submit</Button>
                    </form>
                </Form>
            </DrawerContent>
        </Drawer>
    )


}
