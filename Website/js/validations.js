var app = new Vue({
    el: '#validations',
    data: function() {
        return {
            validationErrors: {
                title: null,
                Description: null,
                img: null,
                date: null,
                doc: null
            }
        } 
    },
    methods: {
        submitForm() {
            if (this.validateForm()) {
                alert('Form Submitted')

            }
        },
        validateForm() {
            var formId = 'validations';
            var nodes = document.querySelectorAll(`#${formId} :invalid`);
            var errorObjectName = 'validationErrors';
            var vm = this;

            Object.keys(this[errorObjectName]).forEach(key => {
                this[errorObjectName][key] = null
            });

            if (nodes.length > 0) {
                nodes.forEach(node => {
                    this[errorObjectName][node.name] = node.validationMessage;
                    node.addEventListener('change', function(e) {
                        vm.validateForm();
                    });
                });

                return false;
            } else {
                return true;
            }
        }
    }
});