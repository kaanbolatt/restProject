import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textMessage = '<span><p style="font-weight: bold;">Architecto ut aperiam autem id</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration insome form, by injected humour, or randomised words which dont look even slightly believable. If you are goingto use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle oftext. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making thisthe first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulof model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum istherefore always free from repetition, injected humour, or non-characteristic words etc.</p></span>';

  constructor(
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

  selectedText(val: number) {
    switch (val) {
      case 1:
        this.textMessage = '<span><p style="font-weight: bold;">Architecto ut aperiam autem id</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration insome form, by injected humour, or randomised words which dont look even slightly believable. If you are goingto use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle oftext. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making thisthe first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulof model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum istherefore always free from repetition, injected humour, or non-characteristic words etc.</p></span>';
        break;

      case 2:
        this.textMessage = '<span><p style="font-weight: bold;">Second Button Text</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed auctor nisl. Pellentesque egestas, arcu vel mollis aliquam, ligula lorem egestas purus, ut viverra erat lorem eget purus. Nullam id tincidunt mauris. Donec dignissim congue nulla, non sagittis diam fermentum ut. Donec accumsan porttitor dolor in consectetur. In venenatis lacinia quam sit amet vulputate</p></span>';
        break;

      case 3:
        this.textMessage = '<span><p style="font-weight: bold;">Third Button Text</p><p>Vivamus eget augue augue. Aliquam ut dolor at turpis finibus volutpat. Quisque in commodo nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas finibus orci auctor, posuere est nec, fringilla lacus. Integer ultricies, metus in convallis molestie, risus magna tristique elit, at laoreet mi justo cursus tortor. Maecenas tempor laoreet nibh vel scelerisque. Fusce ornare, turpis at efficitur dapibus, orci lacus dapibus metus, a egestas felis dui et ipsum. Vestibulum accumsan ac libero sed sollicitudin.</p></span>';
        break;

      case 4:
        this.textMessage = '<span><p style="font-weight: bold;">Fourth Button Text</p><p>Aliquam erat volutpat. Aliquam in quam elit. Mauris semper gravida dui non lacinia. Nullam massa nibh, finibus eu pharetra eu, commodo eget turpis. In vitae aliquam tellus. Proin in risus neque. Sed ac magna arcu. Etiam et sem id purus aliquam consectetur et ut nulla. Curabitur accumsan tristique ex in suscipit. Pellentesque vehicula rhoncus cursus. Suspendisse posuere est in finibus dictum. Nulla quis lacus eu tortor efficitur sodales vel vel magna. Nunc eu libero tincidunt, vehicula nunc sed, scelerisque est.</p></span>';
        break;

      case 5:
        this.textMessage = '<span><p style="font-weight: bold;">Fifth Button Text</p><p>Nunc orci tellus, tristique et augue vel, varius tincidunt nulla. Quisque porttitor arcu vitae arcu pulvinar hendrerit quis ut felis. Aenean iaculis mattis nulla, varius ullamcorper nisi malesuada id. Nulla facilisi. Etiam molestie, sem vitae dictum mollis, enim erat blandit neque, in mattis mauris dui eu velit. Sed laoreet hendrerit pulvinar. Sed condimentum neque condimentum enim posuere, sit amet finibus justo pellentesque. Curabitur non consectetur nunc, ut cursus risus. Cras bibendum, ante sed faucibus varius, lacus dui dictum ex, nec feugiat urna ipsum vel dolor. Aenean interdum ligula ut lobortis porta. Curabitur molestie nunc ex, sit amet aliquam turpis elementum et. Sed convallis neque nec ornare pharetra.</p></span>';
        break;

      default:
        break;
    }
  }

}
