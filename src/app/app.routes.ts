import { Routes } from '@angular/router';
import { ArtistsViewComponent } from './view/artists-view/artists-view.component';
import { AlbumsViewComponent } from './view/albums-view/albums-view.component';
import { MusicsViewComponent } from './view/musics-view/musics-view.component';
import { ArtistViewComponent } from './view/artist-view/artist-view.component';
import { AlbumViewComponent } from './view/album-view/album-view.component';
import { ArtistFormComponent } from './form/artist-form/artist-form.component';
import { AlbumFormComponent } from './form/album-form/album-form.component';
import { MusicFormComponent } from './form/music-form/music-form.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:ArtistsViewComponent},
    {path:'artists',component:ArtistsViewComponent},
    {path:'albums',component:AlbumsViewComponent},
    {path:'musics',component:MusicsViewComponent},
    {path:'artists/new',component:ArtistFormComponent},
    {path:'albums/new',component:AlbumFormComponent},
    {path:'musics/new',component:MusicFormComponent},
    {path:'artists/edit/:id',component:ArtistFormComponent},
    {path:'albums/edit/:id',component:AlbumFormComponent},
    {path:'musics/edit/:id',component:MusicFormComponent},
    {path:'artists/:id',component:ArtistViewComponent},
    {path:'albums/:id',component:AlbumViewComponent},
    {path:'*',component:NotFoundComponent},
];
