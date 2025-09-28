import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function PopOver(){
    return(
    <Popover>
      <PopoverTrigger></PopoverTrigger>
      <PopoverContent>
        <button>Delete</button>
        <button>Update</button>
      </PopoverContent>
    </Popover>
    );
}
export default PopOver