<template>
    <v-app id="announcements">
        <div class="main">
            
            <h1><font-awesome-icon :icon="['fas', 'bullhorn']"/> All Announcements</h1>
    
            <div>
                <h3 v-if="!announcements">Loading...</h3>

                <v-data-table
                    v-else
                    :headers="headers"
                    :items="announcements"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1 table"
                >
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Announcements</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog
                        v-model="dialog"
                        max-width="500px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                              <v-row>
                                <v-col cols="12" sm="12" md="12">
                                  <v-text-field
                                      v-model="editedItem.title"
                                      label="Title"
                                      @click="removeErrorMessage()"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                  <v-textarea
                                      v-model="editedItem.text"
                                      label="Description"
                                      @click="removeErrorMessage()"
                                      ></v-textarea>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-select
                                    :items="cities"
                                    v-model="editedItem.city"
                                    label="City"
                                    @click="removeErrorMessage()"
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-select
                                    :items="bloodtypes"
                                    v-model="editedItem.bloodtype"
                                    label="Blood Type"
                                    @click="removeErrorMessage()"
                                  ></v-select>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col>
                                  <div>
                                    <div v-if="!imagePreview">
                                      <label for="file-upload" class="custom-file-upload">
                                      <h2><font-awesome-icon :icon="['fas', 'image']"/> Select an image</h2>
                                      </label>
                                      <input id="file-upload" class="selectImageBtn" type="file" @change="onFileChange">
                                    </div>
                                    <div class="image-uploaded-div" v-else>
                                      <img class="imagePreview" :src="imagePreview" />
                                      <button class="removeImageBtn" @click="removeImage"><font-awesome-icon :icon="['fas', 'circle-xmark']"/> Remove</button>
                                    </div>
                                      
                                    <button @click="upload()"></button>
                                  </div>
                                </v-col>
                              </v-row>

                              <p v-if="showError" id="error">
                                <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
                                {{ errorMessage }}
                              </p>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    <v-container>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-container>
                   
                    </template>
                    <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                    <!-- <template v-slot:no-data>
                    <v-btn
                        color="primary"
                        @click="initialize"
                    >
                        Reset
                    </v-btn>
                    </template> -->
                </v-data-table>
                 
            </div>
        </div>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import schema from '@/data/announcementSchema'

  export default {
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: '_id',
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'text' },
        { text: 'Bloodtype', value: 'bloodtype' },
        { text: 'City', value: 'city' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        _id: '',
        title: '',
        text: '',
        bloodtype: '',
        city: ''
      },
      defaultItem: {
         _id: '',
        title: '',
        text: '',
        bloodtype: '',
        city: ''
      },
      imagePreview: '',
      fileUpload: '',
      showError: false,
      errorMessage: ''
    }),

    computed: {
        ...mapGetters(["announcements", "cities", "bloodtypes"]),        
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
        announcementID(){
          if(this.editedIndex >= 1){
            return this.announcements[this.editedIndex]._id
          }else{
            return ''
          }
        },
        initialFiles(){
          if(this.editedIndex >= 1){
            return this.announcements[this.editedIndex].image
          }else{
            return ''
          }
        }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.getAllAnnouncements()
    },
    
    methods: {
        ...mapActions(["getAnnouncements", "createAnnouncement", "editAnnouncement", "deleteAnnouncement"]),

      editItem (item) {
        this.file = '';
        this.editedIndex = this.announcements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.loadImage(this.announcements[this.editedIndex].image);
        this.dialog = true
        this.removeErrorMessage()
      },

      deleteItem (item) {
        this.editedIndex = this.announcements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        let id = this.announcements[this.editedIndex]._id
        console.log(id)
        this.deleteAnnouncement(id).then(()=>{
           this.getAnnouncements()
        })
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.removeErrorMessage()
        this.removeImage()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        var data = {
          title: this.editedItem.title,
          text: this.editedItem.text,
          bloodtype: this.editedItem.bloodtype,
          city: this.editedItem.city
        }
        
        //validate
        try {
          const value = await schema.validateAsync(data);
        } catch (error) {
          this.errorMessage = error.message
          this.showError = true
          return
        }

        //if data are correct than continue...

        const formData = new FormData()

        for (const [key, value] of Object.entries(this.editedItem)) {
          formData.append(key, value);
        }

        //if image is uploaded
        if(this.fileUpload) formData.append('image', this.fileUpload, this.fileUpload.name)


        if (this.editedIndex > -1) {
            //update/edit announcement block code

            //if image is removed
            if(!this.imagePreview) formData.append('imageRemoved', true)

            this.editAnnouncement(formData).then(()=>{
              this.getAnnouncements()
            }).catch((err)=>{
              console.log(err)
            })
                
        } else {
            //add new announcement block code
            
            this.createAnnouncement(formData).then(()=>{
              this.getAnnouncements()
            }).catch((err)=>{
              console.log(err)
            })
         
        }
        this.close()
        setTimeout(() => {
          this.getAnnouncements();
        }, 1000);
       
      },

      async getAllAnnouncements() {
        try {
            await this.getAnnouncements();
        } catch (error) {
            console.log(error)
        }
      },

      onFileChange(e) {
        //when an image is selected
        var files = e.target.files || e.dataTransfer.files;
        
        if (!files.length)
          return;
        this.createImage(files[0]);
      },

      createImage(file) {
        //check if image is valid
        const supportedTypes = ['image/jpeg', 'image/png', 'image/web']
        if(!supportedTypes.includes(file.type)){
          this.errorMessage = 'Invalid image type. Please select another one'
          this.showError = true
          return
        }

        //check if image size is bigger than 10MB
        if(file.size > 10 * 1000000){
          this.errorMessage = 'Image is too big. Please select image under 10MB'
          this.showError = true
          return
        }

        this.removeErrorMessage()

        //create/load image that is selected from input
        var reader = new FileReader();

        this.fileUpload = file;

        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
          
        reader.readAsDataURL(file);
      },
      removeImage() {
        this.imagePreview = '';
        this.file = '';
      },

      loadImage(file) {
        //if announement has image load it
        if(file){
          var img = new Buffer.from(file.data.data).toString("base64")
          this.imagePreview = `data:${file.contentType};base64,${img}`
        }else{
          this.imagePreview = ''
        }
      
      },

      removeErrorMessage(){
        this.errorMessage = ''
        this.showError = false
      },
        
    }
  }
</script>

<style scoped>
.main{
    /* min-height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: dashed 2px red; */
    margin: 100px 0;
}

.table{
  max-width: 900px;
}

.select-image-div,
.image-uploaded-div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.imagePreview{
  max-width: 350px;
  max-height: 350px;
}

.removeImageBtn{
  border: none;
  border-radius: 8px;
  padding: 8px;
  background-color: rgb(209, 90, 90);
  margin: 8px 0;
}
.removeImageBtn:hover{
  background-color: rgb(192, 81, 81);
}
.removeImageBtn:active{
  background-color: rgb(167, 69, 69);
}

input[type="file"] {
    display: none;
}
.custom-file-upload {
  border: 2px dashed rgb(182, 181, 181);
  border-radius: 5px;
  display: inline-block;
  padding: 30px;
  width: 100%;
  cursor: pointer;
}
.custom-file-upload:hover{
  background-color: rgb(237, 239, 241);
}
.custom-file-upload:active{
  background-color: rgb(220, 222, 226);
}

#error {
  color: rgb(201, 63, 63);
}

@media only screen and (max-width: 600px) {
 .imagePreview{
   max-width: 90vw;
 }
}
</style>
