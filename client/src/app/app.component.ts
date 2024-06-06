import { Component } from '@angular/core';
import { AnimalsService } from './animals.service';
import { Animal, VettAnimal } from './animals.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = new Array<Animal>();
  form = new FormGroup({
    "name": new FormControl(),
    "type": new FormControl(),
  });
  //Mi faccio iniettare l'animal servce
  constructor(private animalService : AnimalsService)
  {
    //Mi sottoscrivo al servizio
    this.animalService.getAnimals().subscribe(
      (data: VettAnimal)=>{this.data = data['animals']}
    )

  }
  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['type'].value);
  }
}