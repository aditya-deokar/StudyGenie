import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  import { Trash2 } from "lucide-react"
  import { useState } from "react"
  
  interface DropDownOptionProps {
    children: React.ReactNode;
    handleOnDelete: () => void;
  }
  
  const DropDownOption: React.FC<DropDownOptionProps> = ({children , handleOnDelete}) => {
  
    const [openAlert, setOpenAlert] = useState(false)
  
    // const OnDeleteClick=()=>{
    //     handleOnDelete
    // }
  
  
  return (
    <div>
  
        <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
        
            <DropdownMenuItem onClick={()=>setOpenAlert(true)}> 
                <Trash2/>
                Delete
            </DropdownMenuItem>
        
        </DropdownMenuContent>
        </DropdownMenu>
  
        <AlertDialog open={openAlert} >
        
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your Course
                and remove course data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{
                handleOnDelete();
                setOpenAlert(false);
            }}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
  
    </div>
  )
  }
  
  export default DropDownOption