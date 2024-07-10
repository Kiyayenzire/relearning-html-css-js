// preventing the form from auto submit on enter or pressing submit

const initApp = () => {
    const view3 = document.querySelector("view3")
    const myForm = view3.querySelector("#myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("submit event")
    })
}