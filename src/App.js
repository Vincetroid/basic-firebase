import React from 'react';
import './App.css';
import firebase from 'firebase';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.db = {};
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyCOCNeiSUMlHQGBGyAa2kzbLhAUQlDcnyE",
            authDomain: "test-fcm-1fced.firebaseapp.com",
            databaseURL: "https://test-fcm-1fced.firebaseio.com",
            projectId: "test-fcm-1fced",
            storageBucket: "",
            messagingSenderId: "907261740417",
            appId: "1:907261740417:web:60dad2252d2a2bab759480",
            measurementId: "G-PVQYSXXN0K"
        };
        firebase.initializeApp(firebaseConfig);

        this.db = firebase.database();

        const newFeature = {
            date: new Date().getTime(),
            title: 'Dashboard refactor',
            description: 'This is a description. Minimalistic Sections',
            image: 'Not yet',
            video: 'Neither'
        }

        const newFeatureKey = this.db.ref().child('feature').push().key;

        // let updates = {};
        // updates[`/feature/${newFeatureKey}`] = newFeature;
        this.db.ref(`/feature/${newFeatureKey}`).set(newFeature).then(function () {
            console.log("Success!");
        }).catch(function (error) {
            console.log("Error: " + error);
        });

        // this.db.ref().update(updates).then(function () {
        //     console.log("Success!");
        // }).catch(function (error) {
        //     console.log("Error: " + error);
        // });
    }

    // // Como se que usuarios ya vieron la notificaciones
    // let updates = { A: 'Soy A del 01/04/19', B: 'Soy B del 15/05/19', C: 'Soy C del 30/09/19'};
    // let users = { user1: 'I am user One', user2: 'I am user Two' };
    // // A se le muestra a todos
    // //Abre su dashboard users.user1, se le muestran A y B
    //     //Aqui en donde se debe guardar un token de que la vio o
    //     //Guardar la ultima fecha cuando le dio click a new features
    //         // Si hoy le dio click se guardara 09/10/19
    //         // Los features que tienen fechas menores a esa, no seran ya new features para ese usuario
    //             // Si no hay todavia ningun click existente para ese user y por tanto ninguna ultima fecha
    //                 //Crearla (lastVisitToFeatures)
    //             // Si no (si hay fecha previa(lastVisitToFeatures), o sea si ya le dio click alguna vez)
    //                 //...

    //                 //o inverso

    //                 // Si hay fecha previa(lastVisitToFeatures), o sea si ya le dio click alguna vez)
    //                     //Un caso, si le di click 09/10/19 hace rato y regreso ya no habran features
    //                     //Otro caso, si surgieron updates hace una semana el 03/10/19 y le doy
    //                     //click a
    //                 // Si no
    //                     //Crearla (lastVisitToFeatures) y mostrarle todos los features?



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>New push notifications</p>
                </header>
            </div>
        );
    }
}

export default App;

