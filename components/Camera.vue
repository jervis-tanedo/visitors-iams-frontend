<template>
    <div>
        <video ref="video" @canplay="initCanvas()">Unavailable</video>
        <div class="text-center justify-center py-3">
            <div class="justify-center">
                <!-- <button @click="photoModal()" class="inline-flex justify-center py-4 px-4 border rounded-md shadow-sm bg-white text-sm font-medium bg-red-700 hover:bg-red-600 text-white"><i class="fa-solid fa-camera"></i> Take Photo</button> -->
                <button @click="takePicture()" class="w-40 justify-center py-2 px-4 border rounded-md shadow-sm bg-white text-sm font-medium bg-uplbmaroon text-white"><i class="fa-solid fa-camera"></i> Take Photo</button>
            </div>
            <div>
                <!-- <button @click="back()" class="w-40 justify-center py-2 px-4 border rounded-md shadow-sm bg-white text-sm font-medium bg-red-700 hover:bg-red-600 text-white">Cancel</button> -->
            </div>
        </div>
        <div>
            <!-- <TakePhotoModal v-show="showModal" @close-modal="showModal = false" :imgs="previewPhoto"/> -->
        </div>
        <canvas ref="canvas" style="display:none;"></canvas>
    </div>
</template>
<script>
// import TakePhotoModal from '@/components/Modals/TakePhotoModal.vue'
export default {
    name: 'Camera',
    // components: { TakePhotoModal },
    // props: [previewPhoto],
    mounted () {
        this.canvas = this.$refs.canvas;
        this.video = this.$refs.video;
        this.startCapture();
    },
    methods: {
        startCapture() {
            navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
                this.video.srcObject = stream;
                this.video.play();
            }).catch(error => {
                console.log(error);
            })
        },
        takePicture() {
            let context = this.canvas.getContext('2d');
            context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
            this.$emit('picture-taken', this.canvas.toDataURL('image/png'));
            this.previewPhoto = this.canvas.toDataURL('image/png');
            // return this.photoModal();
            // this.showModal = true;
            this.$store.commit('registration/SET_SELFIE', this.previewPhoto)
        },
        initCanvas() {
            this.canvas.setAttribute('width', this.video.videoWidth);
            this.canvas.setAttribute('height', this.video.videoHeight);
        },
        photoModal() {
            this.showModal = true;
            // return this.takePicture();
        },
        back() {
            this.video.srcObject.getTracks().forEach(track => track.stop());
        }
    },
    data() {
        return {
            video: null,
            canvas: null,
            showModal: false,
            previewPhoto: '',
        }
    }
}
</script>
