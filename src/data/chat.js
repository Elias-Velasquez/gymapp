
import faces5 from '/images/faces/5.jpg';
import faces2 from '/images/faces/2.jpg';
import faces8 from '/images/faces/8.jpg';
import faces3 from '/images/faces/3.jpg';
import faces6 from '/images/faces/6.jpg';
import faces4 from '/images/faces/4.jpg';
import faces10 from '/images/faces/10.jpg';
import faces11 from '/images/faces/11.jpg';
import faces13 from '/images/faces/13.jpg';
import faces15 from '/images/faces/15.jpg';
import faces17 from '/images/faces/17.jpg';
import faces18 from '/images/faces/18.jpg';
import faces19 from '/images/faces/19.jpg';
import faces20 from '/images/faces/20.jpg';
import faces21 from '/images/faces/21.jpg';

export let
    chatList = {
        Charts: [
            {
                id: 1, img: faces5, email: 'sujika@mail.com', name: 'Sujika', lastMsg: 'Need to go for lunch?', isOnline: true, isTyping: false, seen: true, unReadMessages: '', lastMessageTime: '1:32PM'
            },
            {
                id: 2, img: faces2, email: 'emileyJackson2134@mail.com', name: 'Emiley Jackson', lastMsg: '', isOnline: true, isTyping: true, seen: true, unReadMessages: '2', lastMessageTime: '12:24PM'
            },
            {
                id: 3, img: faces10, email: 'mcGreggor@mail.com', name: 'McGreggor', lastMsg: 'Nice to meet you 😊', isOnline: true, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '1:16PM'
            },
            {
                id: 4, img: faces8, email: 'alissa@mail.com', name: 'Alissa', lastMsg: 'Chat with you later,bye', isOnline: true, isTyping: false, seen: true, unReadMessages: '', lastMessageTime: '12:45PM'
            },
            {
                id: 5, img: faces11, email: 'andreas@mail.com', name: 'Andreas', lastMsg: 'Congratulations on your new project', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '11:54AM'
            },
            {
                id: 6, img: faces3, email: 'melissasean@mail.com', name: 'Melissa Sean', lastMsg: 'Nice work,Congrats  👏', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '9:45AM'
            },
            {
                id: 7, img: faces6, email: 'samanthaPaul@mail.com', name: 'Samantha Paul', lastMsg: 'Great work keep it up :-)', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '8:31AM'
            },
            {
                id: 8, img: faces4, email: 'meganFox@mail.com', name: 'Megan Fox', lastMsg: 'You are need to be appreaciated for what you have done,congs', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '7:23AM'
            },
            {
                id: 9, img: faces13, email: 'nicholassams@mail.com', name: 'Nicholas Sams', lastMsg: 'Great Project', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '10:22AM'
            },
            {
                id: 10, img: faces15, email: 'popeJohnson@mail.com', name: 'Pope Johnson', lastMsg: 'Hike management fixed', isOnline: false, isTyping: false, seen: false, unReadMessages: '', lastMessageTime: '9: 10AM'
            },

        ],
        groupChat: [
            {
                id: 1, img: faces17, email: 'familyTogether@mail.com', name: ' Family Together 😍 ', whoslastMsg: '', lastMsg: '', isOnline: true, isTyping: true, howisTyping: 'Hira', allSeen: false, unReadMessages: '2', lastMessageTime: '12:24PM', class: ""
            },
            {
                id: 2, img: faces18, email: 'workBuddies@mail.com', name: 'Work Buddies', whoslastMsg: `<span class="group-indivudial">Rams:</span>`, lastMsg: 'Happy to be part of this group', isOnline: true, isTyping: false, howisTyping: '', allSeen: true, unReadMessages: '', lastMessageTime: '1:16PM', class: "chat-msg-unread"
            },
            {
                id: 3, img: faces19, email: 'friendsForever@mail.com', name: ' Friends Forever 😎 ', whoslastMsg: 'Simon', lastMsg: 'Simon, Melissa, Amanda, Patrick, Siddique', isOnline: false, isTyping: false, howisTyping: '', allSeen: false, unReadMessages: '', lastMessageTime: '3 days ago', class: "chat-inactive checkforactive active"
            },
            {
                id: 4, img: faces20, email: 'socialMedia@mail.com', name: 'Social Media Deals', whoslastMsg: 'Subha', lastMsg: 'Kamalan, Subha, Ambrose, Kiara, Jackson', isOnline: false, isTyping: false, howisTyping: '', allSeen: false, unReadMessages: '', lastMessageTime: '5 days ago', class: "chat-inactive checkforactive "
            },
            {
                id: 5, img: faces21, email: 'apartmentGroup@mail.com', name: 'Apartment Group', whoslastMsg: 'Alexa', lastMsg: 'Subman, Rajen, Kairo, Dibasha, Alexa', isOnline: false, isTyping: false, howisTyping: '', allSeen: false, unReadMessages: '', lastMessageTime: '12 days ago', class: "chat-inactive checkforactive "
            },
        ]
    };
