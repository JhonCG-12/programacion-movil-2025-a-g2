<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Gestión de Personal Médico</ion-title>
            </ion-toolbar>
        </ion-header>
        
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Formulario de Paciente</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <form @submit.prevent="handleSubmit">
                        <ion-item>
                            <ion-label position="stacked">Nombre</ion-label>
                            <ion-input v-model="form.nombre" placeholder="Ingrese el nombre"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Apellido</ion-label>
                            <ion-input v-model="form.apellido" placeholder="Ingrese el apellido"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Edad</ion-label>
                            <ion-input v-model="form.edad" type="number" placeholder="Ingrese la edad"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="stacked">Correo Electrónico</ion-label>
                            <ion-input v-model="form.correo" type="email" placeholder="Ingrese el correo"></ion-input>
                        </ion-item>
                        <div class="button-group">
                            <ion-button expand="block" color="primary" @click="agregar">Agregar</ion-button>
                            <ion-button expand="block" color="secondary" @click="modificar">Modificar</ion-button>
                            <ion-button expand="block" color="danger" @click="eliminar">Eliminar</ion-button>
                            <ion-button expand="block" color="tertiary" @click="consultar">Consultar</ion-button>
                        </div>
                    </form>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

export default {
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton },
    setup() {
        const form = ref({ nombre: '', apellido: '', edad: null, correo: '' });

        const agregar = () => console.log("Agregar:", form.value);
        const modificar = () => console.log("Modificar:", form.value);
        const eliminar = () => console.log("Eliminar:", form.value);
        const consultar = () => console.log("Consultar:", form.value);
        const handleSubmit = () => console.log("Formulario enviado", form.value);

        return { form, agregar, modificar, eliminar, consultar, handleSubmit };
    }
};
</script>

<style scoped>
.button-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>