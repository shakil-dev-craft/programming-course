// const addToLocalStorage = () => {
//     const idInput = document.getElementById('storage-id');
//     const id = idInput.value;
//     const valueInput = document.getElementById('storage-value');
//     const value = valueInput.value;

//     // console.log(id, value);
//     if(id && value) {
//         localStorage.setItem(id, value);
//     };
//     idInput.value = '';
//     valueInput.value = '';
// };


const addToLocalStorage = () => {
    const idInput = document.getElementById("storage-id");
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value) {
        sessionStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
};