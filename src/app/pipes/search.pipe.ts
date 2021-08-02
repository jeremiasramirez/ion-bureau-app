import { Pipe, PipeTransform } from "@angular/core"


@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform{
    
    transform(arr,data:any){
      
        if(arr)
            return arr.filter((resp)=>{
                
                if (arr.length){
                    return resp.Nombres.toLowerCase().includes(data.toLowerCase())
                }
                else{
                    return resp
                }
                
            
            })

    }
}