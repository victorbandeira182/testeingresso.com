import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-filmes',
	templateUrl: './filmes.component.html',
	styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  cidades: any = [

    {cidade: 'Rio de Janeiro', id: '2'},
    {cidade: 'São Paulo', id: '1'},
    {cidade: 'Salvador', id: '3'},
    {cidade: 'Aracaju', id: '4'},
    {cidade: 'Porto Alegre', id: '5'},
    {cidade: 'Caixas do Sul', id: '7'},
    {cidade: 'Canoas', id: '8'},
    {cidade: 'Vila Velha', id: '10'},
    {cidade: 'Vitória', id: '11'},
    {cidade: 'Brasília', id: '12'},
  ];
  filmes: any;


  filtros: {
  	label: string,
  	value: boolean
  }[] = [];


// Informações iniciais
  cidadeAtual = 'Rio de Janeiro';
  url = 'https://cors-anywhere.herokuapp.com/https://api-content.ingresso.com/v0/templates/highlights/2/partnership/home';
  filtroFilme: any = {event: {title: ''}};

  GetMovies() {
    fetch(this.url).then((next) => {
      return next.json();
    }).then((cartaz) => {
      this.filmes = cartaz;
      const tipos = [];
      cartaz.forEach((ca) => {
        ca.showtimes.forEach((show) => {
          show.rooms.forEach((room) => {
            room.sessions.forEach((session) => {
              session.types.forEach((t) => {
                tipos.push(t.alias);
              });
            });
          });
        });
      });

      //cria os filtros depois zera a cada estado novo.
      const filtro = tipos.filter((item, index) => tipos.indexOf(item) === index);
      this.filtros = [];
      filtro.forEach((f) =>	this.filtros.push({label: f, value: false}));

		console.log();
    });
  }

  getTrailer(id: string) {
    const filme = this.filmes.filter((el: any) => el.event.id == id);
    const urlSite = filme[0].event.siteURL;
    const trailers = filme[0].event.trailers;
    if (trailers == null) {
      window.open(urlSite, '_blank');
    } else {
      window.open(trailers[0].url, '_blank');
    }
  }

  //usei o cors do heroku por que não consegui resolver o problema de cors que estava dando =(
  changeRegion(id: number) {
    this.url = 'https://cors-anywhere.herokuapp.com/https://api-content.ingresso.com/v0/templates/highlights/' + id + '/partnership/home';
    this.GetMovies();
    this.cidadeAtual = this.cidades.filter((el: any) => el.id == id)[0].cidade;
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.GetMovies();
    this.DirectionArrows();
  }

  filtrar(){
  	const filtrosSelecionados = this.filtros.filter((f) => f.value).map((f) => f.label).sort();
	// this.filmes.filter((f) => f.showtimes.filter((s) => s.rooms.filter((r) => r.sessions.filter((sess) => sess.types))))

	this.filmes = this.filmes.filter((ca) =>
		  ca.showtimes.filter((show) =>
			  show.rooms.filter((room) =>
				  room.sessions.filter((session) => {
						 return session.types.map((t) => t.alias).sort().join(',').startsWith(filtrosSelecionados.join(','));
				  })
			  )
		  )
	  );

	  console.log(filtrosSelecionados);
	// this.filmes = this.filmes.
  }

  DirectionArrows() {
    const left = document.getElementById('arrow-left');
    const right = document.getElementById('arrow-right');
    const scroll = document.getElementById('modules');
    left.addEventListener('click', function () {
      scroll.scrollBy(-280, 0);
    }, false);
    right.addEventListener('click', function () {
      scroll.scrollBy(280, 0);
    }, false);
  }
}
