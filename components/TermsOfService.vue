<template>
  <div>
    <!-- <iframe src="https://privacy.up.edu.ph/" width="900" frameborder="0" style="width:500px; height:400px;overflow:auto;"></iframe> -->
    <p class="pb-4"><span class="text-lg font-bold p-2">Terms and Conditions</span></p>

<p class="pb-4 pt-4"><span class="font-bold p-2">1. Acceptance of Terms</span></p>

<p class="pb-4">By accessing or using University of the Philippines Los Baños, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the website.</p>

<p class="pb-4"><span class="font-bold p-2">2. Changes to Terms</span></p>

<p class="pb-4">University of the Philippines Los Baños reserves the right to modify or revise these terms at any time. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.</p>

<p class="pb-4"><span class="font-bold p-2">3. Use of the Website</span></p>

<p class="pb-4">You agree to use the website for lawful purposes only and in a manner that does not infringe on the rights of, or restrict or inhibit the use and enjoyment of the website by any third party.</p>

<p class="pb-4"><span class="font-bold p-2">4. Intellectual Property</span></p>

<p class="pb-4">All content on this website, including text, graphics, logos, images, audio clips, and software, is the property of University of the Philippines Los Baños and is protected by copyright, trademark, and other intellectual property laws.</p>

<p class="pb-4"><span class="font-bold p-2">5. User Submissions</span></p>

<p class="pb-4">By submitting content to University of the Philippines Los Baños, you grant University of the Philippines Los Baños a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.</p>

<p class="pb-4"><span class="font-bold p-2">6. Privacy Policy</span></p>

<p class="pb-4">Your use of the website is also governed by our Privacy Policy, which can be found [insert link to privacy policy].</p>

<p class="pb-4"><span class="font-bold p-2">7. Limitation of Liability</span></p>

<p class="pb-4">University of the Philippines Los Baños shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the website or the materials on the site.</p>

<p class="pb-4"><span class="font-bold p-2">8. Governing Law</span></p>

<p class="pb-4">These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts located within [Your Jurisdiction].</p>

<p class="pb-4"><span class="font-bold p-2">9. Contact Information</span></p>

<p class="pb-4">If you have any questions or concerns regarding these terms and conditions, please contact us at [Your Contact Information].</p>
  </div>    
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    props: {
        isOpen: {
          type : Boolean
        }
    },
    data() {
        return {
            modalOpen : this.isOpen
        }
    },
    computed: {
      ...mapState({
        tosAccept: state => state.registration.userAcceptTos
      }),
    },
    methods: {
        ...mapMutations({

        }),

        ...mapActions({
          tosAccepted: 'registration/tosAccepted',
        }),

        modal(){
          this.modalOpen = !this.modalOpen
          this.tosAccepted()
          this.$emit('closeModal')
        },
        cancel(){
          window.location.href = '/login'
        },
    },
    watch: {
        modalOpen(newVal, oldVal) {
            if(newVal == false) {
                this.$emit('closeModal')
                document.body.style.removeProperty("overflow");
                this.$emit('closeModal')
            }
        },
        isOpen(newVal, oldVal) {
            if(newVal == true) {
                this.modalOpen = true
                document.body.style.setProperty("overflow", "hidden");
            }
        }
    },
    mounted() {
        console.log(this.modalOpen)
    }
};
</script>
<style>
   #myiframe {
      width: 100%;
      height: 100%;
   }
</style>