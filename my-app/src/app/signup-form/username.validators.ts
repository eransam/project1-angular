import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null{
        console.log("(control.value as string).indexOf" , (control.value as string).indexOf(" ") >=0);
        
        if ((control.value as string).indexOf(" ") >=0)
        return {cannotContainSpace:true}

        return null;
          
        }


        static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("control.value: " , control.value);
                    console.log("control.value === 'mosh' " , control.value === 'mosh');
                    if (control.value === 'mosh') {
                        console.log("1");
                        
                        resolve ({shouldBeUnique: true});    
                    }else{
                        resolve(null);
                    }
                }, 2000);
            });      
            }
    }
