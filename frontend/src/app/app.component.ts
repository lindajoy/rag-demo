import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showErrorMessage: boolean = false;
  activeTab = "website";

  answer: string = '';
  isLoading: boolean = false;

  tones = [
    { value: "professional", label: "Professional" },
    { value: "genz", label: "Gen Z" },
    { value: "casual", label: "Casual" },
    { value: "academic", label: "Academic" },
    { value: "pirate", label: "Pirate" },
    { value: "scottish", label: "Scottish" },
    { value: "Too cool to care", label: "Too cool to care" },
  ];

  formGroup = new FormGroup({
    url: new FormControl('', Validators.required),
    prompt: new FormControl('', Validators.required),
    tone: new FormControl('', Validators.required),
  });


  generateResponse() {
    console.log(this.formGroup.value)
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
