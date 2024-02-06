import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexMockService {

  mainText = {
    textoPrincipal: "Buscador de películas y seríes",
    textoSecundario: "Te invitamos a que pruebes nuestro nuevo buscador, donde encontrarás todos los films que desees y podrás ordenarlos por título y tipo. ¿Qué estás esperando?",
    textoSobreOtroElemento: "Para ser redirigido a nuestro buscador presiona el botón"
  }
  constructor() { }

  getText() {
    return this.mainText;
  }
}
