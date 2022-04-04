<template>
        <h4>Thêm liên hệ mới</h4>
        <ContactFormAdd 
            @submit:contact="createContact" 
            
        />
        <p>{{ message }}</p>
</template>

<script>
    import ContactService from "../services/contact.service"; 
    import ContactFormAdd from "../components/ContactFormAdd.vue";
    export default {
        name: "ContactAdd",
        components: { 
            ContactFormAdd, 
        },
        data() { 
            return { 
                message: "", 
            }; 
        },
        methods: {
            async createContact(data) {
                console.log(data)
                try{
                    await ContactService.create(data);
                    this.message = "Đã thêm liên hệ mới thành công.";
                }
                catch(err){
                    console.log(err);
                }
            },
            
        },
    }
</script>