<template>
    <div v-if="contact" class="edit-form">
        <h4>Hiệu chỉnh Liên hệ</h4>
        <ContactForm 
            :contact="contact" 
            @submit:contact="updateContact" 
            @delete:contact="deleteContact" 
        />
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br /> 
        <p>Liên hệ không tìm thấy.</p>
    </div>
</template>

<script>
    import ContactService from "../services/contact.service"; 
    import ContactForm from "../components/ContactForm.vue"
    export default {
        name: "ContactEdit",
        components: { 
            ContactForm, 
        },
        props: {
            id: { type: String, required: true },
        },
        data() { 
            return { 
                contact: null, message: "", 
            }; 
        },
        methods: {
            async getContact(id) { 
                console.log (id);
                try{
                    this.contact = await ContactService.get(id);
                    console.log(this.contact);
                }
                catch(error)
                {
                    console.log(error);
                    this.$router.push({
                        name:'notfound',
                        params:{
                            pathMatch:this.$route.path.split('/'),
                        },
                        query: this.$route.query,
                        hash:this.$route.hash,
                    })
                }
            },
            async updateContact(data) { 
                console.log(data);
                try{
                    await ContactService.update(this.contact.id,data)
                    this.message = "Liên hệ được cập nhật thành công."; 
                }
                catch(err){
                    console.log(err);
                }
            },
            async deleteContact() { 
                if (confirm('Bạn có muốn xoá liên hệ này hay không?')){
                    try{
                        await ContactService.delete(this.contact.id);
                        this.$router.push({name:"contactbook"});
                    }
                    catch(err){
                        console.log(err);
                    }
                }
            },
        },
        created(){
            this.getContact(this.id);
            this.message="";
        }
    }
</script>

<style> 
    .edit-form { 
        max-width: 400px; 
        margin: auto;
    }
</style>