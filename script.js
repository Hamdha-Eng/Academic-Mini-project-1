new Vue({
        el: '#app', 
        data: {
        name: '',
        comment: '',
        feedbacks: []
        },
        methods: {
        submit() {
            if (this.name !== '' && this.comment !== '') {
            this.feedbacks.push({ name: this.name, comment: this.comment });
            alert('Thank you for your feedback, ' + this.name + '!');
            this.name = '';
            this.comment = '';
            } else {
            alert('Please fill in both your name and feedback.');
            }   
          }
       }
    });

