import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl = "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  title = 'second-part';

  post = {
    title: "Title",
    isFavorite: true
  }

  canSave = false;

  task = {
    title: 'Review applications',
    assignee: null
  }


  courses: any;

  loadCourses() {
    this.courses = [
      { id:1, name: 'course1' },
      { id:2, name: 'course2' },
      { id:3, name: 'course3' },
    ];
  }

  trackCourse(index: any, course:any) {
    return course ? course.id : undefined;
  }

  viewMode = 'something else';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorited changed: ", eventArgs)
  }

}
