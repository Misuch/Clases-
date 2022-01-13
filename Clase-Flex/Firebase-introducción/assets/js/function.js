$(document).ready(function(){
    $("#registro").hide();
    $("#content").hide();

    $("#btn-crear").click(function(){
        $("#login-container").hide();
        $("#registro").show();

    })


      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBvotdu1ihNrac63wLA7y5aCrefu1DD_MQ",
        authDomain: "proyecto-prueba-d68fe.firebaseapp.com",
        projectId: "proyecto-prueba-d68fe",
        storageBucket: "proyecto-prueba-d68fe.appspot.com",
        messagingSenderId: "339286688947",
        appId: "1:339286688947:web:7cee3c8fb33c0c81b89cc6",
        measurementId: "G-KFKDHTGPCZ"
    };

    //Iniciar firebase
    firebase.initializeApp(firebaseConfig);

    //Iniciar servicio de autenticación
    const auth = firebase.auth();

    //Login o inicio de sesion
    $("#btn-ingresar").click(function(e){
        e.preventDefault();
        //Variables de los inputs
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        //Usar servicio de login de firebase
        auth.signInWithEmailAndPassword(correo,clave)
        .then(userCredential=>{
            alert("Datos Correctos");
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert("Código:"+errorCode+". Mensaje: "+errorMessage);
        })
    })

    //Singup o crear cuenta
    $("#btn-registrar").click(function(e){
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail-new").val();
        var clave = $("#pass-new").val();
        //Usar servicio de firebase para crear cuenta
        auth.createUserWithEmailAndPassword(correo,clave)
        .then(userCredential=>{
            $("#login-container").hide();
            $("#registro").show();
            alert("Cuenta Creada");
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert("Código:"+errorCode+". Mensaje: "+errorMessage);
        })
    })

    //Desconexion del Usuario
    //Boton Logout
    $("#btn-logout").click(function (e){
        e.preventDefault();
        auth.signOut().then(() => {
            alert("Sesión Cerrada");
            $("#content").hide();
            $("#login-container").show();
        })
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //Iniciar sesion con google
    $("#btn-login-google").click(function(e){
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result =>{
            alert("Ingreso con Google")
        })
        .catch(error =>{
            alert(error);
        })
    });
    var providerFacebook = new firebase.auth.FacebookAuthProvider();
    //Iniciar sesion con Facebook
    $("#btn-login-facebook").click(function(e){
        e.preventDefault();
        auth.signInWithPopup(providerFacebook)
        .then(result =>{
            alert("Ingreso con Facebook")          
        })
        .catch(error =>{
            alert(error);
        })
    });

    auth.onAuthStateChanged((user)=>{
        if(user){
            //Sesion iniciada
            $("#login-container").hide();
            $("#registro").hide();
            $("#content").show();
            readPosts();
        }
        else{
            //Sesion finalizada
            $("login-container").show();
        }
    })
        const db = firebase.firestore();
        //Publicar un nuevo estado
        $("#btn-publicar").click(function(e){
        e.preventDefault();
        let postText = $("#status-text").val();
        let date =  new Date();
        db.collection("post").add({
            text: postText,
            day: date.getDate(),
            month: date.getMonth() +1,
            year: date.getFullYear(),
        })
        .then((docRef)=>{
            alert("Estado Publicado");
            $("#status-text").val('');
            readPosts();
        })
        .catch((error)=>{
            alert(error);
            })
        })
        function readPosts(){
            db.collection("post").get().then((posts)=>{
                listPosts(posts.docs);
            })
        }
        function listPosts(data){
            var divContent = $("#post-feed");
            divContent.empty();
            if(data.length > 0){
                let content = "";
                data.forEach(document => {
                    let doc = document.data();
                    const divPost = `
                        <div style='border:solid 2px'>
                            <p>${doc.text}</p><br>
                            <texarea style='display: none';></texarea>
                            <button data-id="${document.id}" style='display: none;'>Guardar</button>
                            <span>Publicado el: ${doc.day}/${doc.month}/${doc.year}</span>
                            <button data-id="${document.id}" class="btn btn-warning btn-edit-post">Editar</button>
                            <button data-id="${document.id}" class="btn btn-danger btn-delete-post">Eliminar</button>
                        </div>
                        <hr>
                    `;
                    content += divPost;
                });
                divContent.append(content);
                //Agregar listener a btn-delete
                const btnDelete = document.querySelectorAll(".btn-delete-post");
                btnDelete.forEach(btn=>{
                    btn.addEventListener("click",(e)=>{
                        const id = e.target.dataset.id;
                        deletePost(id);
                    })
                })
            }
        }
        function deletePost(id){
            db.collection("post").doc(id).delete().then(() => {
                alert("Se ha eliminado correctamente");
                readPosts();
            }).catch((error) => {
                console.error("Detalle del Error: ", error);
            });
        }

        function upDatePost(id){
            db.collection("post").doc(id).get().then((doc)=>{
                const item = doc.data();
                $("").val(item.post);
            })
            .catch((error)=>{
                alert("Error: ", error);
            })
        }

        $("#btn.update").click(function(e){
            e.preventDefault();
            let post_upgrade = $("").val();
            let id_post = $("").val();
            db.collection("post").doc(id_post).update({
                post: post_upgrade,
            }).then(()=>{
                alert("Post Actualizado");
            })
            .catch((error)=>{
                alert("Error:",error);
            })
        })
})

