import { Component } from '@angular/core';
import { IndexMockService } from './services/index-mock.service';
import { MainText } from './models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  mainText: MainText = {
    textoPrincipal: '',
    textoSecundario: '',
    textoSobreOtroElemento: ''
  };

  constructor(
    private indexMockService: IndexMockService
  ) {
    this.mainText = indexMockService.getText();
  }
  
}
