import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AlbumsService} from "../albums.service";
import {Photo} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  standalone: true,
    imports: [
      FormsModule,
      CommonModule,
      RouterModule
    ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  loaded!: boolean;
  photos!: Photo[];
  albumId!: number;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService){}

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(){
    this.loaded = false;
    this.route.paramMap.subscribe((params)=> {
      this.albumId = Number(params.get('albumId'));
      this.albumService.getPhotos(this.albumId).subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }
}
