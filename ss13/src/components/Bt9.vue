<template>
    <div>
        <h1>B9</h1>
        <v-row>
            <!-- Basic Layout -->
            <v-col>
                <v-card>
                    <v-card-title>Basic Layout</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Name" outlined></v-text-field>
                            <v-text-field label="Company" outlined></v-text-field>
                            <v-text-field label="Email" outlined></v-text-field>
                            <v-text-field label="Phone No" outlined></v-text-field>
                            <v-textarea label="Message" outlined></v-textarea>
                            <v-btn color="primary">Send</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Basic with Icons -->
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>Basic with Icons</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Name" outlined prepend-inner-icon="mdi-account"></v-text-field>
                            <v-text-field label="Company" outlined
                                prepend-inner-icon="mdi-office-building"></v-text-field>
                            <v-text-field label="Email" outlined prepend-inner-icon="mdi-email"></v-text-field>
                            <v-text-field label="Phone No" outlined prepend-inner-icon="mdi-phone"></v-text-field>
                            <v-textarea label="Message" outlined prepend-inner-icon="mdi-message"></v-textarea>
                            <v-btn color="primary">Send</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

</script>
