import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            euro: null
        },
        
        mounted () {
           this.euroRates();
        },

        methods: {
          euroRates: function(){
              fetch('https://api.exchangeratesapi.io/latest')
              .then(response => response.json())
              .then( data => this.euro = data )
          }

        }
    });
});