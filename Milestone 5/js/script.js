// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo
// nella parte bassa e digitando “enter” il testo
// viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento
// di un messaggio, l’utente riceverà un “ok” come risposta,
// che apparirà dopo 1 secondo.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            userMessageSent: '',
            textFilter: '',
            activeContact: 0,
            activeChatMenu: null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],            
        },
        methods: {
            thisContact: function (clickContact) {
                this.activeContact = clickContact;
                console.log(this.activeContact)
            },
            sendMessage: function () {
                const userMessageText = this.userMessageSent;
                this.contacts[this.activeContact].messages.push(
                    {
                        date: 123,
                        text: userMessageText,
                        status: 'sent',
                    }
                )
                this.userMessageSent = '';

                setTimeout(this.contactReply, 1000);

                
            },
            contactReply: function () {
                this.contacts[this.activeContact].messages.push(
                    {
                        date: 4567,
                        text: 'ok',
                        status: 'received',
                    }
                )
            },
            contactsFilter: function () {
                this.contacts.forEach((element) => {
                    if (element.name.toLowerCase().includes(this.textFilter.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },
            menuTextChat: function(clickedChatMenu) {
                const menuChatText = document.getElementById("menu_text_chat_single");
                this.activeChatMenu = clickedChatMenu;
                // if (menuChatText.classList.contains('display_none')) {
                //     menuChatText.classList.add("menu_text_chat");
                //     menuChatText.classList.remove("display_none");
                // } else {
                //     menuChatText.classList.remove("menu_text_chat");
                //     menuChatText.classList.add("display_none");
                // }
            }
        }
    },
);
