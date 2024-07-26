import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']  // Corregido de 'styleUrl' a 'styleUrls'
})
export class PageLayoutComponent {
  valor: string = '';
  archivos: File[] = [];

  onSubmit() {
    console.log('Formulario enviado', this.valor);
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.archivos = Array.from(fileList);
    }
  }
}
