import { Component } from '@angular/core';

@Component({
  selector: 'app-contaact-form',
  templateUrl: './contaact-form.component.html',
  styleUrls: ['./contaact-form.component.css']
})
export class ContaactFormComponent {
    contactMethods = [
        {id:1, name:"email"},
        {id:2, name:"phone"}
    ]
    log(x){console.log(x);
    };

    submit(f){
        console.log(f.value);
        
    }
    

}
