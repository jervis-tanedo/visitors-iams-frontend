<template>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <!--
        Background backdrop, show/hide based on modal state.
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-100 transition-opacity"></div>
    
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <!--
            Modal panel, show/hide based on modal state.
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: outline/exclamation -->
                  <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Terms of Service</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Phasellus viverra porta diam, nec venenatis diam blandit nec. Nulla et leo ultrices enim scelerisque tempor ut ac velit. Nam ultricies enim at neque vulputate, non tincidunt quam pellentesque. Nam ullamcorper efficitur quam ut volutpat. Vivamus tempor aliquam elementum. Duis vehicula nisl et finibus venenatis. Aenean viverra efficitur velit, ut rhoncus lectus porta et. In sit amet dapibus tortor. Etiam tellus felis, volutpat sed pellentesque a, tincidunt ut risus. Donec auctor finibus velit. Suspendisse massa elit, placerat sed finibus condimentum, lacinia eget magna. Integer tempus auctor nulla, vel fermentum est commodo et. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                        Mauris lacinia diam ac lorem convallis vehicula. Etiam vehicula consectetur urna, vitae pulvinar massa blandit at. Pellentesque maximus sem sagittis hendrerit sodales. Sed faucibus felis nulla, vitae sollicitudin urna vehicula id. Aliquam ac felis consequat, bibendum arcu at, aliquam quam. Fusce sit amet mi ut neque lobortis porta nec et tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam in tellus ut velit imperdiet consequat rutrum non sem. Nullam luctus eros metus, eu pulvinar ligula ultricies eu.

                        Vivamus at fermentum lacus. Nam ornare est a tempor aliquam. Vestibulum vitae interdum lorem. Cras pretium ante quis risus laoreet, in porttitor ante vestibulum. Pellentesque molestie feugiat risus, at volutpat sem posuere placerat. Quisque sit amet venenatis enim, nec mollis sapien. Aenean ultrices, nibh non viverra ultricies, tortor lectus auctor mauris, in pulvinar metus dui vel nisi. In a mi venenatis, suscipit purus eu, placerat eros. Maecenas eu ultricies turpis, vulputate venenatis augue. Aenean fringilla varius auctor. Nulla nunc neque, volutpat at ex eget, hendrerit pellentesque libero.

                        Fusce condimentum nulla nec urna venenatis feugiat. Maecenas at interdum mauris. Vivamus eleifend, ligula eu sollicitudin convallis, odio quam viverra ligula, ut bibendum enim neque id erat. Nam a rhoncus nisl, eu suscipit arcu. Vivamus bibendum vehicula massa eu elementum. Maecenas ac eleifend tellus. Aenean dictum risus sed velit pulvinar sagittis. Nullam tortor augue, vehicula vel tincidunt at, accumsan sit amet risus. Nam cursus neque id mauris blandit facilisis. In venenatis pellentesque neque nec sodales. Suspendisse varius, odio sagittis rutrum euismod, lorem elit congue turpis, eget condimentum risus diam congue justo. Fusce erat dui, vulputate ac elit ut, euismod elementum nisl. Curabitur at turpis sem. Integer posuere metus vitae porttitor lobortis.

                        Vestibulum ornare risus sed odio mollis, at tempor ligula varius. Integer dapibus varius iaculis. Vestibulum dignissim lacus in interdum egestas. Mauris eleifend nulla felis, ac fermentum velit ultricies at. Maecenas lacinia quam orci, vitae sodales augue varius a. Vestibulum quis lorem id turpis suscipit efficitur. Ut dapibus nibh eu velit elementum tincidunt.

                        Fusce in lorem lacus. Nam eget tincidunt turpis. Fusce maximus lorem in justo eleifend rutrum. Vivamus luctus tincidunt quam, in gravida tellus scelerisque ac. Sed ultrices risus lacus, volutpat dignissim odio sodales et. Nulla malesuada neque a leo faucibus, vel dictum lacus convallis. Maecenas eu risus eleifend, blandit augue ac, vestibulum augue. Integer dapibus justo a pharetra suscipit. Sed luctus id turpis non tincidunt. Sed lobortis facilisis nulla eu feugiat.

                        Ut vehicula bibendum rhoncus. Maecenas sit amet luctus orci, porta fermentum elit. Mauris cursus vitae mauris vitae ullamcorper. Sed sit amet arcu magna. Ut semper sagittis ex, eu rhoncus massa facilisis et. Mauris vestibulum velit sagittis tincidunt sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut euismod lacus vitae ultricies aliquam.

                        Cras hendrerit odio vel efficitur ultricies. Proin nec enim gravida, sodales est ut, efficitur nunc. Donec ligula dui, vestibulum nec metus eu, tempus varius lorem. Aliquam accumsan bibendum tellus, eu consectetur risus dignissim eget. Proin quis dui nec eros dignissim ultricies et a quam. Etiam vitae lacinia metus. Cras sed venenatis erat. Etiam quis accumsan massa. Etiam bibendum ac neque eu finibus. Nunc malesuada dui nec ornare finibus. Nunc purus elit, egestas et arcu at, aliquam malesuada ante. Nulla et ultrices lorem. Ut eget dictum sapien, a sodales ligula. Duis in pharetra dui. Nunc sem elit, vestibulum ut lorem quis, laoreet sagittis lectus. Pellentesque nisi orci, malesuada eget mi ut, ullamcorper malesuada metus.

                        Duis nec ante urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sodales nunc quis tristique blandit. Cras tempus eu ipsum ac tincidunt. Sed egestas nulla sed commodo aliquam. Integer vitae velit eleifend, bibendum magna sed, facilisis nisi. Aenean placerat leo in porttitor vulputate. Aenean diam mauris, gravida sit amet augue vitae, congue tempus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque orci elit, euismod in nisi vel, tincidunt condimentum orci. Suspendisse interdum non magna vel accumsan. Donec tristique libero et ornare finibus. Nam ac eros vitae odio vehicula posuere sed sit amet ipsum. Cras at rutrum nulla. Nullam sed ipsum commodo, condimentum massa ut, mattis turpis. Vivamus mattis efficitur mi, id feugiat diam tincidunt et.

                        Curabitur ac ornare mi. Aliquam erat volutpat. Quisque consectetur ligula eu ex bibendum rhoncus. Aliquam semper hendrerit ornare. Sed accumsan nunc at consequat luctus. Etiam laoreet luctus tristique. Cras feugiat nibh et purus gravida porttitor. Nullam ac felis in velit fermentum dictum. Sed imperdiet metus vel tincidunt ornare. Quisque ut enim vestibulum, luctus tortor ac, sollicitudin enim. Aliquam in hendrerit ligula.</p>
                  </div>
                  <div class="my-2">
                    <small>By clicking "I Agree" you are agreeing in our terms of service</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="modal">I Agree</button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
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