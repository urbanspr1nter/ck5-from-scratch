const div = document.querySelector("#ckeditor");
const editor = create(div).then(editor => {
    console.log(editor);
});