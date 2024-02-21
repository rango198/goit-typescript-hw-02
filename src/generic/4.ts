/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Post {
  title: string;
}

class Component<T extends Post> {
  constructor (public props:T) {

  }
}

class Page extends Component<Post> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
