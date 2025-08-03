<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import ContactCardComponent from '../../shared/components/@spk/contacts-cards.vue';
import face1 from "/images/faces/1.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";
import face5 from "/images/faces/5.jpg";
import face6 from "/images/faces/6.jpg";
import face7 from "/images/faces/7.jpg";
import face8 from "/images/faces/8.jpg";
import face10 from "/images/faces/10.jpg";
import face11 from "/images/faces/11.jpg";
import face12 from "/images/faces/12.jpg";
import face13 from "/images/faces/13.jpg";
import face14 from "/images/faces/14.jpg";
import face15 from "/images/faces/15.jpg";
import face21 from "/images/faces/21.jpg";
import media39 from "/images/media/media-39.jpg";
import media63 from "/images/media/media-63.jpg";
import media13 from "/images/media/media-13.jpg";
import media8 from "/images/media/media-8.jpg";
import media34 from "/images/media/media-34.jpg";
import media21 from "/images/media/media-21.jpg";
import media36 from "/images/media/media-36.jpg";

export default {
    components: {
        PageHeader,
        ContactCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Contacts",
                list: ['Pages', 'Contacts']
            },
            contacts: [
                { id: 1, name: 'Melissa Jane', email: 'melissajane2134@gmail.com', phone: '+1(555) 354 2345', imageSrc: face4, isFavorite: "danger", heartIcon: "fill" },
                { id: 2, name: 'Simon Cowall', email: 'simoncowal111@gmail.com', phone: '+1(555) 873 8923', imageSrc: face15, isFavorite: "muted", heartIcon: "line " },
                { id: 3, name: 'Susana Sane', email: 'susanasane@gmail.com', phone: '+1(555) 347 0923', imageSrc: face2, isFavorite: "danger", heartIcon: "fill" },
                { id: 4, name: 'Sahne Watson', email: 'shanewatson@gmail.com', phone: '+1(555) 674 7824', imageSrc: face13, isFavorite: "muted", heartIcon: "line " },
                { id: 5, name: 'Dwayne Happy', email: 'dwaynehappy235@gmail.com', phone: '+1(555) 985 2893', imageSrc: media39, isFavorite: "muted", heartIcon: "line " },
                { id: 6, name: 'Meisha Tite', email: 'meishatite456@gmail.com', phone: '+1(555) 675 4680', imageSrc: face5, isFavorite: "muted", heartIcon: "line " },
                { id: 7, name: 'Andrew Gerfield', email: 'andrewgerfield00@gmail.com', phone: '+1(555) 765 8937', imageSrc: face10, isFavorite: "muted", heartIcon: "line " },
                { id: 8, name: 'Samantha Melon', email: 'samanthamelon@gmail.com', phone: '+1(555) 890 5687', imageSrc: face21, isFavorite: "muted", heartIcon: "line " },
                { id: 9, name: "Elisha Smith", email: "elishasmith@gmail.com", phone: "+1(555) 972 9883", imageSrc: face11, isFavorite: "muted", heartIcon: "line " },
                { id: 10, name: "Devon Convoy", email: "devonconvoy65@gmail.com", phone: "+1(555) 693 7836", imageSrc: media63, isFavorite: "danger", heartIcon: "fill" },
                { id: 11, name: "Shensovic Jeremy", email: "shensovicjeremy@gmail.com", phone: "+1(555) 238 2342", content: 'JS', isFavorite: "muted", heartIcon: "line " },
                { id: 12, name: "Jason Mama", email: "jasonmama96@gmail.com", phone: "+1(555) 875 6789", imageSrc: face12, isFavorite: "muted", heartIcon: "line " },
                { id: 13, name: 'Monika Karen', email: 'monikakaren@gmail.com', phone: '+1(555) 568 9234', imageSrc: face1, isFavorite: "muted", heartIcon: "line " },
                { id: 14, name: 'Tom Holland', email: 'tomholland98@gmail.com', phone: '+1(555) 892 4334', imageSrc: media13, isFavorite: "muted", heartIcon: "line " },
                { id: 15, name: 'Anelica Julie', email: 'angelicajulie@gmail.com', phone: '+1(555) 882 3445', imageSrc: media36, isFavorite: "muted", heartIcon: "line " },
                { id: 16, name: 'Aneera Khan', email: 'aneerakhan@gmail.com', phone: '+1(555) 973 8734', imageSrc: face8, isFavorite: "muted", heartIcon: "line " },
                { id: 17, name: 'Linda Simson', email: 'lindasimson@gmail.com', phone: '+1(555) 234 9345', imageSrc: face21, isFavorite: "danger", heartIcon: "fill" },
                { id: 18, name: 'Umaga Nigel', email: 'umaganigel89@gmail.com', phone: '+1(555) 783 0213', imageSrc: face14, isFavorite: "muted", heartIcon: "line " },
                { id: 19, name: 'Json Taylor', email: 'jsontaylor@gmail.com', phone: '+1(555) 234 2452', imageSrc: media8, isFavorite: "danger", heartIcon: "fill" },
                { id: 20, name: 'Karizma Tope', email: 'Karizmatope@gmail.com', phone: '+1(555) 890 2455', imageSrc: face7, isFavorite: "muted", heartIcon: "line " },
                { id: 21, name: 'Gahaskar Shaik', email: 'gahaskarshaik@gmail.com', phone: '+1(555) 982 7648', imageSrc: media34, isFavorite: "muted", heartIcon: "line " },
                { id: 22, name: 'Balvinder Singh', email: 'balvindersingh@gmail.com', phone: '+1(555) 002 1239', imageSrc: media21, isFavorite: "muted", heartIcon: "line " },
                { id: 23, name: 'Ramika Missi', email: 'ramikamissi@gmail.com', phone: '+1(555) 982 4834', imageSrc: face6, isFavorite: "muted", heartIcon: "line " }
            ]
        };
    },
};
</script>

<template>
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card mt-4">
                <div class="card-body">
                    <div class="contact-header">
                        <div class="d-sm-flex d-block align-items-center justify-content-between">
                            <div class="h5 fw-semibold mb-0">Contacts</div>
                            <div class="d-flex mt-sm-0 mt-2 align-items-center">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0"
                                        placeholder="Search Contact" aria-describedby="search-contact-member">
                                    <button class="btn btn-light" type="button" id="search-contact-member"><i
                                            class="ri-search-line text-muted"></i></button>
                                </div>
                                <div class="dropdown ms-2">
                                    <button class="btn btn-icon btn-primary-light btn-wave" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Copy All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Move To</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-icon btn-secondary-light ms-2"><v-tooltip activator="parent"
                                        location="top">Add Contact</v-tooltip><i class="ri-add-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in contacts" :key="card.id">
            <ContactCardComponent cardBodyClass="contact-action" :card="card" />

        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
        </nav>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
