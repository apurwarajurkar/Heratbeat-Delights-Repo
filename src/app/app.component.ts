import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './CafeWebsiteModule/mainpage/about/about.component';
import { GalleryComponent } from './CafeWebsiteModule/mainpage/gallery/gallery.component';
import { MainpageComponent } from './CafeWebsiteModule/mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "'Apurwa's Cafe''";
  
}
