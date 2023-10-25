import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SaveData } from '../save-data.interface';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss']
})
export class AboutFormComponent implements OnInit, SaveData {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({name: new FormControl('')})
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  submit() {
    console.log(this.form.value);
  }
}
