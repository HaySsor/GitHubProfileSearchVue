const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            entredValue: ''
        }
    },
    methods: {
        search() {
            this.entredValue = this.inputValue
        }
    },
})
    .component('github-user-card', {
        template: '#github-user-card-template',
        props: ['username'],
        data() {
            return {
                profileData: {}
            }
        },
        async created() {
            const res = await fetch(`https://api.github.com/users/${this.username}`)
            this.profileData = await res.json()
        },
        async beforeUpdate() {
            const res = await fetch(`https://api.github.com/users/${this.username}`)
            this.profileData = await res.json()
        },
    })
    .mount('#app')