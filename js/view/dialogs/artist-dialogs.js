import Dialog from "../dialog-SUPER";

export class ArtistDetails extends Dialog {
  constructor(id) {
    super(id);
  }

  render() {
    const html = /*html*/ ``;
  }
  submit() {
    const form = this.dialog.querySelector("form");
    this.artist = new Artist({
      name: form.name.value,
      genre: form.genre.value,
      image: form.image.value,
      description: form.description.value,
    });

    form.reset();
  }
}



export  class ArtistCreate extends Dialog {


  render() {
    const html = /*html*/ `
    <form>
    </form>
    `;
  }
  submit(form) {
    return { name: form.name.value, birthdate: form.birthdate.value };
  }
}
