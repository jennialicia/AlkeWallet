// Primer usuario válido
const userValido1 = "jenni@alkewallet.com";
const passValida1 = "1234567";

// Segundo usuario válido
const userValido2 = "alicia@alkewallet.com";
const passValida2 = "1234567";

// Rescatando datos del formulario para inicio de sesión
const formulario = document.getElementById("formLogin");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

// Función que inicia el inicio de sesión
function login(e) {
    e.preventDefault();

    if (email.value === userValido1 && password.value === passValida1) {
        // Si el primer usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
        location.href = 'menu.html';
        sessionStorage.setItem("inicioDeSesion", 1);
    } else if (email.value === userValido2 && password.value === passValida2) {
        // Si el segundo usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
        location.href = 'menu.html';
        sessionStorage.setItem("inicioDeSesion", 2);
    } else {
        // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
        alert("Correo electrónico y/o contraseña incorrectos");
    }
}

// Ejecutar la función login al enviar el formulario
formulario.addEventListener("submit", login);









// const userValido1 = "jenni@alkewallet.com";
//         const passValida1 = "1234567";

//         const userValido2 = "alicia@alkewallet.com";
//         const passValida2 = "1234567";

//         const formulario = document.getElementById("formLogin");
//         const email = document.getElementById("userEmail");
//         const password = document.getElementById("userPassword");
//         const menuLink = document.getElementById("menuLink");

//         function login(e) {
//             e.preventDefault();

//             if (email.value === userValido1 && password.value === passValida1) {
//                 // Si el primer usuario es correcto, dirigirlo al menú principal
//                 menuLink.click(href="../../menu.html"); // Simular clic en el enlace
//             } else if (email.value === userValido2 && password.value === passValida2) {
//                 // Si el segundo usuario es correcto, dirigirlo al menú principal
//                 menuLink.click(href="../../menu.html"); // Simular clic en el enlace
//             } else {
//                 // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
//                 alert("Correo electrónico y/o contraseña incorrectos");
//             }
//         }











// // Primer usuario válido



// const userValido1 = "jenni@alkewallet.com";
// const passValida1 = "1234567";

// // Segundo usuario válido
// const userValido2 = "alicia@alkewallet.com";
// const passValida2 = "1234567";

// // Rescatando datos del formulario para inicio de sesión
// const formulario = document.getElementById("formLogin");
// const email = document.getElementById("userEmail");
// const password = document.getElementById("userPassword");


// console.log("cambiosjsprueba", formulario);
// console.log("cambiosjsprueba2lala", email);
// console.log("cambiosjsprueba3password", password);



// function login(e) {
//     e.preventDefault();

//     console.log("Email introducido:", email.value);
//     console.log("Contraseña introducida:", password.value);

//     if (email.value === userValido1 && password.value === passValida1) {
//         // Si el primer usuario es correcto, almacenar el inicio de sesión en sessionStorage y redirigir al menú principal
//         console.log("Iniciando sesión como usuario 1...");
//         sessionStorage.setItem("inicioDeSesion", 1);
//         window.location.href = "../../menu.html";
//     } else if (email.value === userValido2 && password.value === passValida2) {
//         // Si el segundo usuario es correcto, almacenar el inicio de sesión en sessionStorage y redirigir al menú principal
//         console.log("Iniciando sesión como usuario 2...");
//         sessionStorage.setItem("inicioDeSesion", 2);
//         window.location.href = "../../menu.html";
//     } else {
//         // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
//         console.log("Correo electrónico y/o contraseña incorrectos");
//         alert("Correo electrónico y/o contraseña incorrectos");
//     }
// }













// // function login(e) {
// //     e.preventDefault();

// //     console.log("Email introducido:", email.value);
// //     console.log("Contraseña introducida:", password.value);

// //     if (email.value === userValido1 && password.value === passValida1) {
// //         // Si el primer usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
// //         console.log("Iniciando sesión como usuario 1...");
// //         sessionStorage.setItem("inicioDeSesion", 1);
// //         window.location.href = '../../menu.html'; // Redirigir al menú principal
// //     } else if (email.value === userValido2 && password.value === passValida2) {
// //         // Si el segundo usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
// //         console.log("Iniciando sesión como usuario 2...");
// //         sessionStorage.setItem("inicioDeSesion", 2);
// //         window.location.href = '../../menu.html'; // Redirigir al menú principal
// //     } else {
// //         // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
// //         console.log("Correo electrónico y/o contraseña incorrectos");
// //         alert("Correo electrónico y/o contraseña incorrectos");
// //     }
// // // }












// // Función que inicia el inicio de sesión
// // function login(e) {
// //     e.preventDefault();

// //     if (email.value === userValido1 && password.value === passValida1) {
// //         // Si el primer usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
// //         location.href = '../../menu.html';





// //     } else if (email.value === userValido2 && password.value === passValida2) {
// //         // Si el segundo usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
// //         location.href = '../../menu.html';
// //         sessionStorage.setItem("inicioDeSesion", 2);
// //     } else {
// //         // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
// //         alert("Correo electrónico y/o contraseña incorrectos");
// //     }
// // }

// // Ejecutar la función login al enviar el formulario
// formulario.addEventListener("submit", login);