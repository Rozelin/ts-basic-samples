// Enums
enum Membership {
    Simple,
    Standart,
    Premium
}

const membership1 = Membership.Standart // 1
const membership2 = Membership[2] // 'Premium' => reverse enum

enum SocialMedia {
    FB = 'FACEBOOK',
    VK = 'VKONTAKTE',
    INST = 'INSTAGRAM'
}

const media = SocialMedia.FB // 'FACEBOOK'

// PRO TIP: each enum declaration is transpiled into a self linking object even if it is not used.
// To minimize compiled code, use `const enum` instead

const enum links {
    youtube = 'hhtps://youtube.com/',
    vk = 'https://vk.com/',
    fb = 'https://facebook.com/'
}

// this will get rendered into an empty line when not used.

const social = [links.vk, links.fb]
