import { Component, inject } from '@angular/core'
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'
import { filter, map, mergeMap } from 'rxjs'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-angular-typescript';

  constructor() {
    const router = inject(Router)
    const route = inject(ActivatedRoute)
    const titleService = inject(Title)
    const metaService = inject(Meta)

    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let current = route
        while (current.firstChild) current = current.firstChild
        return current
      }),
      mergeMap(r => r.data)
    ).subscribe(data => {
      if (data['title']) {
        titleService.setTitle(data['title'])
      }
      if (data['description']) {
        metaService.updateTag({ name: 'description', content: data['description'] })
      }
      if (data['keywords']) {
        metaService.updateTag({ name: 'keywords', content: data['keywords'] })
      }
    })
  }
}